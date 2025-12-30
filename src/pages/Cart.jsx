import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { formatCurrency } from '../utils/formatters';
import { Button } from '../components/common/Button';
import './Cart.css';

export const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="cart-empty">
            <div className="cart-empty__icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Start shopping to add items to your cart</p>
            <Link to="/products">
              <Button variant="primary" size="large">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const subtotal = getCartTotal();
  const shipping = subtotal > 5000 ? 0 : 500;
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-page__header">
          <h1>Shopping Cart</h1>
          <p>{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</p>
        </div>

        <div className="cart">
          <div className="cart__items">
            {cartItems.map((item, index) => (
              <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}-${index}`} className="cart-item">
                <Link to={`/products/${item.id}`} className="cart-item__image">
                  <img src={item.images[0]} alt={item.name} />
                </Link>
                <div className="cart-item__details">
                  <Link to={`/products/${item.id}`}>
                    <h3 className="cart-item__name">{item.name}</h3>
                  </Link>
                  <div className="cart-item__options">
                    <span>Size: {item.selectedSize}</span>
                    <span>Color: {item.selectedColor}</span>
                  </div>
                  <p className="cart-item__price">{formatCurrency(item.price, 'LKR')}</p>
                </div>
                <div className="cart-item__quantity">
                  <button
                    className="cart-item__quantity-btn"
                    onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="cart-item__quantity-value">{item.quantity}</span>
                  <button
                    className="cart-item__quantity-btn"
                    onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <div className="cart-item__total">
                  <p className="cart-item__total-price">
                    {formatCurrency(item.price * item.quantity, 'LKR')}
                  </p>
                </div>
                <button
                  className="cart-item__remove"
                  onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                  aria-label="Remove item"
                >
                  ×
                </button>
              </div>
            ))}
            <button className="cart__clear" onClick={clearCart}>
              Clear Cart
            </button>
          </div>

          <div className="cart__summary">
            <h2 className="cart__summary-title">Order Summary</h2>
            <div className="cart__summary-row">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal, 'LKR')}</span>
            </div>
            <div className="cart__summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : formatCurrency(shipping, 'LKR')}</span>
            </div>
            {subtotal < 5000 && (
              <p className="cart__free-shipping">
                Add {formatCurrency(5000 - subtotal, 'LKR')} more for free shipping!
              </p>
            )}
            <div className="cart__summary-row cart__summary-row--total">
              <span>Total</span>
              <span>{formatCurrency(total, 'LKR')}</span>
            </div>
            <Link to="/checkout" className="cart__checkout-btn">
              <Button variant="primary" size="large" fullWidth>
                Proceed to Checkout
              </Button>
            </Link>
            <Link to="/products" className="cart__continue">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
