import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <span className={styles.logo}>SYAA <span className={styles.logoAccent}>Clothing</span></span>
            <p>Premium crop tops for every style. Quality you can feel.</p>
          </div>
          <div className={styles.links}>
            <h4>Shop</h4>
            <Link to="/shop">All Crop Tops</Link>
            <Link to="/shop?category=ribbed">Ribbed</Link>
            <Link to="/shop?category=oversized">Oversized</Link>
            <Link to="/shop?category=fitted">Fitted</Link>
          </div>
          <div className={styles.links}>
            <h4>Help</h4>
            <a href="#faq">FAQ</a>
            <a href="#shipping">Shipping</a>
            <a href="#returns">Returns</a>
          </div>
          <div className={styles.links}>
            <h4>Contact</h4>
            <a href="mailto:hello@syaaclothing.com">hello@syaaclothing.com</a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} SYAA Clothing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
