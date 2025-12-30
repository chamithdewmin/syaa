import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedProducts, getBestSellingProducts } from '../data/products';
import { formatCurrency } from '../utils/formatters';
import { ProductCard } from '../components/common/ProductCard';
import { Button } from '../components/common/Button';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../contexts/ToastContext';
import { setupScrollAnimations } from '../utils/animations';
import './Home.css';

export const Home = () => {
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [bestSelling, setBestSelling] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setFeaturedProducts(getFeaturedProducts());
    setBestSelling(getBestSellingProducts());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cleanup = setupScrollAnimations();
    return cleanup;
  }, [featuredProducts, bestSelling]);

  const slides = [
    {
      id: 1,
      title: 'Premium Crop Tops',
      subtitle: 'Discover Your Style',
      description: 'Elevate your wardrobe with our curated collection of premium crop tops',
      image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=1200&h=800&fit=crop'
    },
    {
      id: 2,
      title: 'New Collection',
      subtitle: 'Latest Trends',
      description: 'Stay ahead of fashion with our newest arrivals',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&h=800&fit=crop'
    },
    {
      id: 3,
      title: 'Signature Teal',
      subtitle: 'Bold & Beautiful',
      description: 'Make a statement with our signature teal collection',
      image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1200&h=800&fit=crop'
    }
  ];

  const handleQuickAdd = (product) => {
    addToCart(product, product.sizes[0], product.colors[0], 1);
    addToast(`${product.name} added to cart!`, 'success');
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home__hero">
        <div className="home__slider">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`home__slide ${index === currentSlide ? 'home__slide--active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="home__slide-overlay"></div>
              <div className="home__slide-content">
                <h1 className="home__slide-title">{slide.title}</h1>
                <p className="home__slide-subtitle">{slide.subtitle}</p>
                <p className="home__slide-description">{slide.description}</p>
                <Link to="/products">
                  <Button variant="primary" size="large">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
          <div className="home__slider-controls">
            <button
              className="home__slider-btn"
              onClick={() => setCurrentSlide((prev) => (prev - 1 + 3) % 3)}
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              className="home__slider-btn"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)}
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          <div className="home__slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`home__slider-dot ${index === currentSlide ? 'home__slider-dot--active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section" data-animate="fade-in-up">
        <div className="container">
          <div className="section__header" data-animate="fade-in">
            <h2 className="section__title">Featured Collection</h2>
            <Link to="/products" className="section__link">
              View All →
            </Link>
          </div>
          <div className="products-grid animate-stagger">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleQuickAdd}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section section--alt" data-animate="fade-in-up">
        <div className="container">
          <div className="section__header" data-animate="fade-in">
            <div>
              <h2 className="section__title">Best Sellers</h2>
              <p className="section__subtitle">Our most loved crop tops</p>
            </div>
            <Link to="/products" className="section__link">
              View All →
            </Link>
          </div>
          <div className="products-grid animate-stagger">
            {bestSelling.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleQuickAdd}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
