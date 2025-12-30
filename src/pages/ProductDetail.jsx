import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../contexts/ToastContext';
import { formatCurrency } from '../utils/formatters';
import { Button } from '../components/common/Button';
import { ProductCard } from '../components/common/ProductCard';
import './ProductDetail.css';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const product = getProductById(id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="container">
          <div className="product-detail__not-found">
            <h2>Product not found</h2>
            <Link to="/products">
              <Button variant="primary">Back to Products</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      addToast('Please select size and color', 'error');
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
    addToast(`${product.name} added to cart!`, 'success');
  };

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      addToast('Please select size and color', 'error');
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
    navigate('/cart');
  };

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="product-detail">
          {/* Product Images */}
          <div className="product-detail__images">
            <div className="product-detail__main-image">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="product-detail__image"
              />
              {product.badge && (
                <span className={`product-detail__badge product-detail__badge--${product.badge.toLowerCase()}`}>
                  {product.badge}
                </span>
              )}
              {discount && (
                <span className="product-detail__discount">-{discount}%</span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="product-detail__thumbnails">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`product-detail__thumbnail ${selectedImage === index ? 'product-detail__thumbnail--active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="product-detail__info">
            <h1 className="product-detail__name">{product.name}</h1>

            <div className="product-detail__rating">
              <span className="product-detail__stars">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
              </span>
              <span className="product-detail__rating-value">{product.rating}</span>
              <span className="product-detail__reviews">({product.reviews} reviews)</span>
            </div>

            <div className="product-detail__price">
              <span className="product-detail__price-current">
                {formatCurrency(product.price, 'LKR')}
              </span>
              {product.originalPrice && (
                <>
                  <span className="product-detail__price-original">
                    {formatCurrency(product.originalPrice, 'LKR')}
                  </span>
                  <span className="product-detail__price-discount">
                    Save {formatCurrency(product.originalPrice - product.price, 'LKR')}
                  </span>
                </>
              )}
            </div>

            <p className="product-detail__description">{product.description}</p>

            {/* Size Selection */}
            <div className="product-detail__option">
              <label className="product-detail__label">Size</label>
              <div className="product-detail__sizes">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`product-detail__size-btn ${selectedSize === size ? 'product-detail__size-btn--active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="product-detail__option">
              <label className="product-detail__label">Color</label>
              <div className="product-detail__colors">
                {product.colors.map(color => (
                  <button
                    key={color}
                    className={`product-detail__color-btn ${selectedColor === color ? 'product-detail__color-btn--active' : ''}`}
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
            <div className="product-detail__option">
              <label className="product-detail__label">Quantity</label>
              <div className="product-detail__quantity">
                <button
                  className="product-detail__quantity-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  −
                </button>
                <span className="product-detail__quantity-value">{quantity}</span>
                <button
                  className="product-detail__quantity-btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="product-detail__actions">
              <Button
                variant="primary"
                size="large"
                fullWidth
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button
                variant="secondary"
                size="large"
                fullWidth
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
            </div>

            {/* Features */}
            <div className="product-detail__features">
              <h3>Features</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="product-detail__related">
            <h2 className="section__title">You May Also Like</h2>
            <div className="products-grid">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
