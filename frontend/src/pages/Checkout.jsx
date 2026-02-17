import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import ProductImage from '../components/ProductImage'
import { getProductById } from '../data/products'
import styles from './Checkout.module.css'

export default function Checkout() {
  const navigate = useNavigate()
  const { items, cartTotal, clearCart } = useCart()
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    country: 'United States',
    cardNumber: '',
    expiry: '',
    cvc: '',
    nameOnCard: '',
  })
  const [processing, setProcessing] = useState(false)

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }))

  if (items.length === 0 && step < 3) {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2>Your cart is empty</h2>
        <Link to="/shop" className="btn btn-primary" style={{ marginTop: 16 }}>
          Shop Crop Tops
        </Link>
      </div>
    )
  }

  const handlePayment = async (e) => {
    e.preventDefault()
    setProcessing(true)
    // Simulate payment processing (frontend only)
    await new Promise((r) => setTimeout(r, 1500))
    clearCart()
    setProcessing(false)
    navigate('/order-confirmation')
  }

  return (
    <div className={styles.checkout}>
      <div className={styles.pageBanner}>
        <div className="container">
          <h1 className={styles.pageBannerTitle}>Checkout</h1>
          <p className={styles.pageBannerSubtitle}>Secure checkout — demo only, no real payment.</p>
        </div>
      </div>
      <div className="container">
        <div className={styles.steps}>
          <span className={step >= 1 ? styles.stepActive : ''}>1. Shipping</span>
          <span className={styles.stepDivider}>→</span>
          <span className={step >= 2 ? styles.stepActive : ''}>2. Payment</span>
        </div>

        <form onSubmit={handlePayment} className={styles.layout}>
          <div className={styles.formSection}>
            {step === 1 && (
              <>
                <h2>Contact &amp; Shipping</h2>
                <div className={styles.field}>
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className="label">First name</label>
                    <input
                      type="text"
                      className="input"
                      value={form.firstName}
                      onChange={(e) => update('firstName', e.target.value)}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label className="label">Last name</label>
                    <input
                      type="text"
                      className="input"
                      value={form.lastName}
                      onChange={(e) => update('lastName', e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className="label">Address</label>
                  <input
                    type="text"
                    className="input"
                    value={form.address}
                    onChange={(e) => update('address', e.target.value)}
                    placeholder="Street address"
                    required
                  />
                </div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className="label">City</label>
                    <input
                      type="text"
                      className="input"
                      value={form.city}
                      onChange={(e) => update('city', e.target.value)}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label className="label">ZIP</label>
                    <input
                      type="text"
                      className="input"
                      value={form.zip}
                      onChange={(e) => update('zip', e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className="label">Country</label>
                  <input
                    type="text"
                    className="input"
                    value={form.country}
                    onChange={(e) => update('country', e.target.value)}
                  />
                </div>
                <button type="button" className="btn btn-primary" onClick={() => setStep(2)}>
                  Continue to Payment
                </button>
              </>
            )}
            {step === 2 && (
              <>
                <h2>Payment (Demo)</h2>
                <p className={styles.demoNote}>
                  This is a frontend-only demo. No real charges will be made.
                </p>
                <div className={styles.field}>
                  <label className="label">Name on card</label>
                  <input
                    type="text"
                    className="input"
                    value={form.nameOnCard}
                    onChange={(e) => update('nameOnCard', e.target.value)}
                    placeholder="Full name"
                  />
                </div>
                <div className={styles.field}>
                  <label className="label">Card number</label>
                  <input
                    type="text"
                    className="input"
                    value={form.cardNumber}
                    onChange={(e) => update('cardNumber', e.target.value)}
                    placeholder="4242 4242 4242 4242"
                    maxLength={19}
                  />
                </div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className="label">Expiry (MM/YY)</label>
                    <input
                      type="text"
                      className="input"
                      value={form.expiry}
                      onChange={(e) => update('expiry', e.target.value)}
                      placeholder="12/28"
                    />
                  </div>
                  <div className={styles.field}>
                    <label className="label">CVC</label>
                    <input
                      type="text"
                      className="input"
                      value={form.cvc}
                      onChange={(e) => update('cvc', e.target.value)}
                      placeholder="123"
                    />
                  </div>
                </div>
                <div className={styles.stepActions}>
                  <button type="button" className="btn btn-outline" onClick={() => setStep(1)}>
                    Back
                  </button>
                  <button type="submit" className="btn btn-primary" disabled={processing}>
                    {processing ? 'Processing…' : `Pay $${cartTotal.toFixed(2)}`}
                  </button>
                </div>
              </>
            )}
          </div>
          <aside className={styles.orderSummary}>
            <h2>Order summary</h2>
            <div className={styles.orderList}>
              {items.map((item) => {
                const product = getProductById(item.productId)
                if (!product) return null
                return (
                  <div key={`${item.productId}-${item.size}`} className={styles.orderRow}>
                    <div className={styles.orderImage}>
                      <ProductImage product={product} />
                    </div>
                    <div className={styles.orderInfo}>
                      <span>{item.name}</span>
                      <span>Size {item.size} × {item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className={styles.orderTotal}>
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
          </aside>
        </form>
      </div>
    </div>
  )
}
