import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getProductById } from '../data/products'
import { useCart } from '../contexts/CartContext'
import { formatCurrency } from '../utils/formatters'
import './ProductDetail.css'

export const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const product = getProductById(id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '')
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '')
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <Link to="/products">Back to Products</Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color')
      return
    }
    addToCart(product, selectedSize, selectedColor, quantity)
    alert('Product added to cart!')
  }

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color')
      return
    }
    addToCart(product, selectedSize, selectedColor, quantity)
    navigate('/cart')
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        {/* Product Images */}
        <div className="product-images">
          <div className="main-image">
            <img src={product.images[selectedImage]} alt={product.name} />
            {product.badge && <span className="product-badge">{product.badge}</span>}
          </div>
          {product.images.length > 1 && (
            <div className="thumbnail-images">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className={selectedImage === index ? 'active' : ''}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          
          <div className="product-rating">
            <span className="stars">★★★★★</span>
            <span className="rating-value">{product.rating}</span>
            <span className="reviews-count">({product.reviews} reviews)</span>
          </div>

          <div className="product-price-section">
            <p className="current-price">{formatCurrency(product.price, 'LKR')}</p>
            {product.originalPrice && (
              <>
                <p className="original-price">{formatCurrency(product.originalPrice, 'LKR')}</p>
                <span className="discount-percent">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              </>
            )}
          </div>

          <div className="delivery-info">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"></path>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
            <span>Free Delivery</span>
          </div>

          <div className="product-description">
            <p>{product.description}</p>
          </div>

          {/* Size Selection */}
          <div className="product-options">
            <div className="option-group">
              <label>Size</label>
              <div className="size-buttons">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="option-group">
              <label>Color</label>
              <div className="color-buttons">
                {product.colors.map(color => (
                  <button
                    key={color}
                    className={`color-btn ${selectedColor === color ? 'active' : ''}`}
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  >
                    {selectedColor === color && '✓'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="option-group">
              <label>Quantity</label>
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="product-actions">
            <button className="btn-add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="btn-buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>

          {/* Features */}
          <div className="product-features">
            <h3>Features</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Installment Options */}
          <div className="installment-options">
            <p>or 3 installments of {formatCurrency(product.price / 3, 'LKR')} with <strong>KOKO</strong></p>
            <p>or 4 installments of {formatCurrency(product.price / 4, 'LKR')} with <strong>PayZy</strong></p>
          </div>
        </div>
      </div>
    </div>
  )
}

