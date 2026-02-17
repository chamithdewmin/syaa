import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { getProductById, productCategories } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductImage from '../components/ProductImage'
import styles from './ProductDetail.module.css'

const categoryName = (id) => productCategories.find((c) => c.id === id)?.name || id

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addToCart } = useCart()
  const [size, setSize] = useState(product?.sizes?.[0] || 'M')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/shop" className="btn btn-primary" style={{ marginTop: 16 }}>
          Back to Shop
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, size, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <nav className={styles.breadcrumb}>
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/shop">Shop</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>
        <div className={styles.layout}>
          <div className={styles.imageWrap}>
            <ProductImage product={product} className={styles.image} />
          </div>
          <div className={styles.details}>
            <span className={styles.category}>{categoryName(product.category)}</span>
            <span className={styles.colorTag}>{product.color}</span>
            <h1 className={styles.title}>{product.name}</h1>
            <p className={styles.price}>${product.price.toFixed(2)}</p>
            <p className={styles.desc}>{product.description}</p>
            <div className={styles.option}>
              <label className="label">Size</label>
              <div className={styles.sizeList}>
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={size === s ? styles.sizeActive : styles.sizeBtn}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.option}>
              <label className="label">Quantity</label>
              <div className={styles.quantityWrap}>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className={styles.qtyBtn}
                >
                  −
                </button>
                <span className={styles.qtyValue}>{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className={styles.qtyBtn}
                >
                  +
                </button>
              </div>
            </div>
            <div className={styles.actions}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddToCart}
                style={{ flex: 1 }}
              >
                {added ? '✓ Added to Cart' : 'Add to Cart'}
              </button>
              <Link to="/cart" className="btn btn-outline">
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
