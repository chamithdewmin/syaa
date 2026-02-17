import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import styles from './Header.module.css'

export default function Header() {
  const { cartCount } = useCart()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          SYAA <span className={styles.logoAccent}>Clothing</span>
        </Link>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/shop" className={styles.navLink}>Shop</Link>
          <Link to="/cart" className={styles.cartLink}>
            <span className={styles.cartIcon}>🛒</span>
            Cart
            {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
          </Link>
        </nav>
      </div>
    </header>
  )
}
