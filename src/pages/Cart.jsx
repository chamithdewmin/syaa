import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import { formatCurrency } from '../utils/formatters'
import './Cart.css'

export const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty">
          <h2>Your cart is empty</h2>
          <p>Start shopping to add items to your cart</p>
          <Link to="/products" className="btn-shop-now">
            Shop Now
          </Link>
        </div>
      </div>
    )
  }

  const subtotal = getCartTotal()
  const shipping = subtotal > 5000 ? 0 : 500
  const total = subtotal + shipping

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Shopping Cart</h1>

        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}-${index}`} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.images[0]} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <div className="cart-item-options">
                    <span>Size: {item.selectedSize}</span>
                    <span>Color: {item.selectedColor}</span>
                  </div>
                  <p className="cart-item-price">{formatCurrency(item.price, 'LKR')}</p>
                </div>
                <div className="cart-item-quantity">
                  <button onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}>
                    +
                  </button>
                </div>
                <div className="cart-item-total">
                  <p>{formatCurrency(item.price * item.quantity, 'LKR')}</p>
                </div>
                <button
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                >
                  ×
                </button>
              </div>
            ))}
            <button className="btn-clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal, 'LKR')}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : formatCurrency(shipping, 'LKR')}</span>
            </div>
            {subtotal < 5000 && (
              <p className="free-shipping-note">
                Add {formatCurrency(5000 - subtotal, 'LKR')} more for free shipping!
              </p>
            )}
            <div className="summary-row total">
              <span>Total</span>
              <span>{formatCurrency(total, 'LKR')}</span>
            </div>
            <Link to="/checkout" className="btn-checkout">
              Proceed to Checkout
            </Link>
            <Link to="/products" className="btn-continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

