import { Link } from 'react-router-dom';
import { formatCurrency } from '../../../utils/formatters';
import { Button } from '../Button';
import './ProductCard.css';

export const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <Link to={`/products/${product.id}`} className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-card__image"
          loading="lazy"
        />
        {product.badge && (
          <span className={`product-card__badge product-card__badge--${product.badge.toLowerCase()}`}>
            {product.badge}
          </span>
        )}
        {discount && (
          <span className="product-card__discount">-{discount}%</span>
        )}
        <div className="product-card__overlay">
          <Button
            variant="primary"
            size="medium"
            onClick={handleAddToCart}
            className="product-card__add-btn"
          >
            Quick Add
          </Button>
        </div>
      </div>
      <div className="product-card__info">
        <h3 className="product-card__name">{product.name}</h3>
        <div className="product-card__rating">
          <span className="product-card__stars">
            {'★'.repeat(Math.floor(product.rating))}
            {'☆'.repeat(5 - Math.floor(product.rating))}
          </span>
          <span className="product-card__rating-value">({product.reviews})</span>
        </div>
        <div className="product-card__price">
          <span className="product-card__price-current">
            {formatCurrency(product.price, 'LKR')}
          </span>
          {product.originalPrice && (
            <span className="product-card__price-original">
              {formatCurrency(product.originalPrice, 'LKR')}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

