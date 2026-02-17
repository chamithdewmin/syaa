import { Link } from 'react-router-dom'
import ProductImage from './ProductImage'
import { productCategories } from '../data/products'
import styles from './ProductCard.module.css'

const categoryName = (id) => productCategories.find((c) => c.id === id)?.name || id

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <ProductImage product={product} />
        {product.bestSeller && <span className={styles.bestSellerBadge}>Best Seller</span>}
        <span className={styles.colorBadge} data-color={product.color.toLowerCase()}>
          {product.color}
        </span>
      </div>
      <div className={styles.info}>
        <span className={styles.category}>{categoryName(product.category)}</span>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
      </div>
    </Link>
  )
}
