import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/common/ProductCard';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../contexts/ToastContext';
import { setupScrollAnimations } from '../utils/animations';
import './Products.css';

export const Products = () => {
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedColor, setSelectedColor] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const search = searchParams.get('search');
    if (search) setSearchQuery(search);
  }, [searchParams]);

  // Get unique colors from products
  const availableColors = useMemo(() => {
    const colors = new Set();
    products.forEach(product => {
      product.colors.forEach(color => colors.add(color));
    });
    return Array.from(colors).sort();
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Color filter
    if (selectedColor !== 'all') {
      filtered = filtered.filter(product => product.colors.includes(selectedColor));
    }

    // Price filter
    if (selectedPrice !== 'all') {
      const [min, max] = selectedPrice.split('-').map(Number);
      filtered = filtered.filter(product => {
        if (max) {
          return product.price >= min && product.price <= max;
        }
        return product.price >= min;
      });
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered = [...filtered].filter(p => p.badge === 'New');
        break;
      default:
        // Featured/default order
        break;
    }

    return filtered;
  }, [selectedColor, selectedPrice, sortBy, searchQuery]);

  useEffect(() => {
    const cleanup = setupScrollAnimations();
    return cleanup;
  }, [filteredProducts]);

  const handleQuickAdd = (product) => {
    addToCart(product, product.sizes[0], product.colors[0], 1);
    addToast(`${product.name} added to cart!`, 'success');
  };

  const clearFilters = () => {
    setSelectedColor('all');
    setSelectedPrice('all');
    setSortBy('featured');
    setSearchQuery('');
  };

  return (
    <div className="products-page">
      <div className="products-page__header" data-animate="fade-in-down">
        <div className="container">
          <h1 className="products-page__title">Shop Crop Tops</h1>
          <p className="products-page__subtitle">Discover our complete collection</p>
        </div>
      </div>

      <div className="container">
        <div className="products-page__content">
          {/* Filters Sidebar */}
          <aside className={`products-page__filters ${showFilters ? 'products-page__filters--open' : ''}`} data-animate="fade-in-left">
            <div className="products-page__filters-header">
              <h3>Filters</h3>
              <button
                className="products-page__filters-close"
                onClick={() => setShowFilters(false)}
                aria-label="Close filters"
              >
                ×
              </button>
            </div>

            <div className="products-page__filter-section">
              <h4>Search</h4>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="products-page__search-input"
              />
            </div>

            <div className="products-page__filter-section">
              <h4>Color</h4>
              <div className="products-page__color-filters">
                <button
                  className={`products-page__filter-btn ${selectedColor === 'all' ? 'products-page__filter-btn--active' : ''}`}
                  onClick={() => setSelectedColor('all')}
                >
                  All
                </button>
                {availableColors.map(color => (
                  <button
                    key={color}
                    className={`products-page__filter-btn ${selectedColor === color ? 'products-page__filter-btn--active' : ''}`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="products-page__filter-section">
              <h4>Price</h4>
              <div className="products-page__price-filters">
                <button
                  className={`products-page__filter-btn ${selectedPrice === 'all' ? 'products-page__filter-btn--active' : ''}`}
                  onClick={() => setSelectedPrice('all')}
                >
                  All Prices
                </button>
                <button
                  className={`products-page__filter-btn ${selectedPrice === '0-2000' ? 'products-page__filter-btn--active' : ''}`}
                  onClick={() => setSelectedPrice('0-2000')}
                >
                  Under LKR 2,000
                </button>
                <button
                  className={`products-page__filter-btn ${selectedPrice === '2000-3000' ? 'products-page__filter-btn--active' : ''}`}
                  onClick={() => setSelectedPrice('2000-3000')}
                >
                  LKR 2,000 - 3,000
                </button>
                <button
                  className={`products-page__filter-btn ${selectedPrice === '3000-4000' ? 'products-page__filter-btn--active' : ''}`}
                  onClick={() => setSelectedPrice('3000-4000')}
                >
                  LKR 3,000 - 4,000
                </button>
                <button
                  className={`products-page__filter-btn ${selectedPrice === '4000' ? 'products-page__filter-btn--active' : ''}`}
                  onClick={() => setSelectedPrice('4000')}
                >
                  Over LKR 4,000
                </button>
              </div>
            </div>

            <button className="products-page__clear-filters" onClick={clearFilters}>
              Clear All Filters
            </button>
          </aside>

          {/* Products Grid */}
          <main className="products-page__main" data-animate="fade-in-right">
            <div className="products-page__toolbar" data-animate="fade-in">
              <div className="products-page__results">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
              </div>
              <div className="products-page__toolbar-right">
                <button
                  className="products-page__filters-toggle"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  Filters
                </button>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="products-page__sort"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="products-page__empty" data-animate="fade-in-up">
                <h3>No products found</h3>
                <p>Try adjusting your filters or search terms</p>
                <button onClick={clearFilters} className="products-page__clear-filters">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="products-grid animate-stagger">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleQuickAdd}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
