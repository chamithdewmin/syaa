import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import ProductImage from '../components/ProductImage'
import { getProductById } from '../data/products'
import styles from './Cart.module.css'

export default function Cart() {
  const { items, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart()

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <div className={styles.pageBanner}>
          <div className="container">
            <h1 className={styles.pageBannerTitle}>Shopping Cart</h1>
          </div>
        </div>
        <div className="container">
          <div className={styles.emptyContent}>
            <h2>Your cart is empty</h2>
            <p>Add some crop tops from our shop.</p>
            <Link to="/shop" className="btn btn-primary">
              Shop Crop Tops
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.cart}>
      <div className={styles.pageBanner}>
        <div className="container">
          <h1 className={styles.pageBannerTitle}>Shopping Cart</h1>
          <p className={styles.pageBannerSubtitle}>Review your items and proceed to checkout.</p>
        </div>
      </div>
      <div className="container">
        <h1 className={styles.title}>Your items</h1>
        <div className={styles.layout}>
          <div className={styles.list}>
            {items.map((item) => {
              const product = getProductById(item.productId)
              if (!product) return null
              return (
                <div key={`${item.productId}-${item.size}`} className={styles.row}>
                  <div className={styles.rowImage}>
                    <ProductImage product={product} />
                  </div>
                  <div className={styles.rowInfo}>
                    <h3>{item.name}</h3>
                    <p>Size: {item.size}</p>
                    <p className={styles.rowPrice}>${item.price.toFixed(2)}</p>
                    <div className={styles.rowQty}>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className={styles.remove}
                      onClick={() => removeFromCart(item.productId, item.size)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
          <aside className={styles.summary}>
            <h2>Order Summary</h2>
            <div className={styles.summaryRow}>
              <span>Subtotal ({cartCount} items)</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className={styles.summaryTotal}>
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <Link to="/checkout" className="btn btn-primary" style={{ width: '100%', marginTop: 16 }}>
              Proceed to Checkout
            </Link>
            <Link to="/shop" className={styles.continue}>
              Continue shopping
            </Link>
          </aside>
        </div>
      </div>
    </div>
  )
}
