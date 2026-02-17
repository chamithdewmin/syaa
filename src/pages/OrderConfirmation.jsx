import { Link } from 'react-router-dom'
import styles from './OrderConfirmation.module.css'

export default function OrderConfirmation() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.icon}>✓</div>
          <h1>Thank you for your order</h1>
          <p>
            Your order has been received. This is a frontend demo — no real payment was processed.
          </p>
          <p className={styles.email}>
            A confirmation “email” would be sent to your inbox in a full-stack version.
          </p>
          <div className={styles.actions}>
            <Link to="/shop" className="btn btn-primary">
              Continue Shopping
            </Link>
            <Link to="/" className="btn btn-teal-outline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
