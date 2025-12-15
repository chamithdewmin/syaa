import { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { products } from '../data/products'
import { formatCurrency } from '../utils/formatters'
import './Products.css'

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [selectedSubcategory, setSelectedSubcategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '')
  
  useEffect(() => {
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    if (category) setSelectedCategory(category)
    if (search) setSearchQuery(search)
  }, [searchParams])

  const categories = ['all', 'women', 'men']
  const subcategories = {
    women: ['all', 'dresses', 'tops', 'blouses'],
    men: ['all', 't-shirts', 'shirts', 'pants'],
  }

  const filteredProducts = useMemo(() => {
    let filtered = products

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Subcategory filter
    if (selectedSubcategory !== 'all') {
      filtered = filtered.filter(product => product.subcategory === selectedSubcategory)
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        filtered = [...filtered].filter(p => p.badge === 'New')
        break
      default:
        // Featured/default order
        break
    }

    return filtered
  }, [selectedCategory, selectedSubcategory, sortBy, searchQuery])

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Shop All Products</h1>
        <p>Discover our complete collection</p>
      </div>

      <div className="products-container">
        {/* Filters Sidebar */}
        <aside className="products-filters">
          <div className="filter-section">
            <h3>Search</h3>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-section">
            <h3>Category</h3>
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(category)
                  setSelectedSubcategory('all')
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {selectedCategory !== 'all' && (
            <div className="filter-section">
              <h3>Type</h3>
              {subcategories[selectedCategory]?.map(subcategory => (
                <button
                  key={subcategory}
                  className={`filter-btn ${selectedSubcategory === subcategory ? 'active' : ''}`}
                  onClick={() => setSelectedSubcategory(subcategory)}
                >
                  {subcategory.charAt(0).toUpperCase() + subcategory.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          )}

          <div className="filter-section">
            <h3>Sort By</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </aside>

        {/* Products Grid */}
        <main className="products-grid-container">
          <div className="products-count">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
          </div>
          <div className="products-grid">
            {filteredProducts.map(product => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="product-card-link"
              >
                <div className="product-card">
                  <div className="product-image" style={{ backgroundImage: `url(${product.images[0]})` }}>
                    {product.badge && <span className="product-badge">{product.badge}</span>}
                    {product.originalPrice && (
                      <span className="discount-badge">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </span>
                    )}
                  </div>
                  <div className="product-info">
                    <div className="delivery-info">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"></path>
                        <circle cx="5.5" cy="18.5" r="2.5"></circle>
                        <circle cx="18.5" cy="18.5" r="2.5"></circle>
                      </svg>
                      <span>Free Delivery</span>
                    </div>
                    <h3>{product.name}</h3>
                    <div className="product-price-row">
                      <p className="product-price">{formatCurrency(product.price, 'LKR')}</p>
                      {product.originalPrice && (
                        <p className="original-price">{formatCurrency(product.originalPrice, 'LKR')}</p>
                      )}
                    </div>
                    <div className="product-rating">
                      <span className="stars">★★★★★</span>
                      <span className="rating-text">({product.rating})</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

