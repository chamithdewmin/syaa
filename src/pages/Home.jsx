import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getFeaturedProducts, getBestSellingProducts } from '../data/products'
import { formatCurrency } from '../utils/formatters'
import './Home.css'

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [bestSelling, setBestSelling] = useState([])

  useEffect(() => {
    setFeaturedProducts(getFeaturedProducts())
    setBestSelling(getBestSellingProducts())
  }, [])

  const slides = [
    { 
      id: 1, 
      title: "New Collection", 
      subtitle: "Shop the Latest",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      id: 2, 
      title: "Women's Collection", 
      subtitle: "Explore Fashion",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      id: 3, 
      title: "Men's Collection", 
      subtitle: "Style for All",
      image: "https://plus.unsplash.com/premium_photo-1664910935747-6bb1e76eed99?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="home-page">
      {/* Hero Slider */}
      <section className="hero-slider">
        <div className="slider-container">
          <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <div className="slider-content">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="slide-overlay"></div>
                <div className="slide-content">
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                  <Link to="/products" className="btn-primary">Shop Now</Link>
                </div>
              </div>
            ))}
          </div>
          <button className="slider-btn next" onClick={nextSlide} aria-label="Next slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </section>

      {/* Latest Arrival */}
      <section className="section latest-arrival">
        <div className="container">
          <div className="section-header">
            <h2>Latest Arrival</h2>
            <Link to="/products" className="link-more">Explore More</Link>
          </div>
          <div className="product-grid">
            {featuredProducts.map((product, index) => (
              <Link key={product.id} to={`/products/${product.id}`} className="product-card-link">
                <div className="product-card">
                  <div className="product-image" style={{ backgroundImage: `url(${product.images[0]})` }}>
                    {product.badge && <span className="product-badge">{product.badge}</span>}
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
                    <p className="product-price">{formatCurrency(product.price, 'LKR')}</p>
                    <div className="installment-options">
                      <p className="installment-text">or 3 installments of {formatCurrency(product.price / 3, 'LKR')} with</p>
                      <span className="payment-logo">KOKO</span>
                    </div>
                    <div className="installment-options">
                      <p className="installment-text">or 4 installments of {formatCurrency(product.price / 4, 'LKR')} with</p>
                      <span className="payment-logo">PayZy</span>
                    </div>
                    <div className="color-indicator" style={{ backgroundColor: '#000000' }}></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="section collections">
        <div className="container">
          <div className="collection-grid">
            <Link to="/products?category=women" className="collection-card large">
              <h3>Women's Collection</h3>
              <span className="btn-outline">View Collection</span>
            </Link>
            <Link to="/products?category=men" className="collection-card">
              <h3>Men's Collection</h3>
              <span className="btn-outline">View Collection</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Selling */}
      <section className="section best-selling">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Best Selling</h2>
              <p className="section-subtitle">Our Most Loved Looks</p>
            </div>
            <Link to="/products" className="link-more">View All</Link>
          </div>
          <div className="product-grid">
            {bestSelling.map((product, index) => (
              <Link key={product.id} to={`/products/${product.id}`} className="product-card-link">
                <div className="product-card">
                  <div className="product-image" style={{ backgroundImage: `url(${product.images[0]})` }}>
                    <div className="product-image-overlay"></div>
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
                    <p className="product-price">{formatCurrency(product.price, 'LKR')}</p>
                    <div className="installment-options">
                      <p className="installment-text">or 3 installments of {formatCurrency(product.price / 3, 'LKR')} with</p>
                      <span className="payment-logo">KOKO</span>
                    </div>
                    <div className="installment-options">
                      <p className="installment-text">or 4 installments of {formatCurrency(product.price / 4, 'LKR')} with</p>
                      <span className="payment-logo">PayZy</span>
                    </div>
                    <div className="color-indicator" style={{ backgroundColor: index === 0 ? '#ffffff' : index === 1 ? '#808080' : index === 2 ? '#000080' : '#ffffff' }}></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

