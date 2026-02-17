import { Link } from 'react-router-dom'
import { products, getFeaturedProducts, getBestSellers } from '../data/products'
import ProductCard from '../components/ProductCard'

// All data in frontend only - no backend. Products defined in src/data/products.js
const featured = getFeaturedProducts()
const bestSellers = getBestSellers()

export default function Home() {
  return (
    <div style={{ minHeight: '100%' }}>
      {/* Big hero banner - global CSS so it always shows */}
      <section className="home-hero" aria-label="Welcome to SYAA Clothing">
        <div>
          <h1>
            SYAA <span className="hero-accent">Clothing</span>
          </h1>
          <p>Premium crop tops in teal, black & white. Quality fabrics, perfect fit.</p>
          <Link to="/shop" className="hero-cta">
            Shop Crop Tops
          </Link>
        </div>
      </section>

      {/* Featured crop tops - UI only, products from frontend data */}
      <section className="home-section" aria-labelledby="featured-heading">
        <div className="container">
          <h2 id="featured-heading">Featured Crop Tops</h2>
          <p className="section-subtitle">Handpicked styles — ribbed, oversized, fitted, and more.</p>
          <div className="product-grid">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="cta-wrap">
            <Link to="/shop" className="btn btn-teal-outline">
              View All {products.length} Products
            </Link>
          </div>
        </div>
      </section>

      {/* Best sellers - frontend data only */}
      <section className="home-section home-section-alt" aria-labelledby="bestsellers-heading">
        <div className="container">
          <h2 id="bestsellers-heading">Best Sellers</h2>
          <p className="section-subtitle">Our most loved crop tops. Join thousands of happy customers.</p>
          <div className="product-grid">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="cta-wrap">
            <Link to="/shop" className="btn btn-primary">
              Shop Best Sellers
            </Link>
          </div>
        </div>
      </section>

      {/* Promo banner */}
      <section className="home-promo">
        <div className="container">
          <h2>Free shipping on orders over $75</h2>
          <p>Easy returns. Secure checkout. Sustainable packaging.</p>
          <Link to="/shop">Shop now →</Link>
        </div>
      </section>
    </div>
  )
}
