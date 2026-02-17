import { useSearchParams } from 'react-router-dom'
import { useMemo } from 'react'
import { products, productCategories } from '../data/products'
import ProductCard from '../components/ProductCard'
import styles from './Shop.module.css'

const colors = ['Teal', 'Black', 'White']

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get('category') || ''
  const color = searchParams.get('color') || ''

  const filtered = useMemo(() => {
    let list = products
    if (category) list = list.filter((p) => p.category === category)
    if (color) list = list.filter((p) => p.color.toLowerCase() === color.toLowerCase())
    return list
  }, [category, color])

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value) next.set(key, value)
    else next.delete(key)
    setSearchParams(next)
  }

  return (
    <div className={styles.shop}>
      <div className={styles.pageBanner}>
        <div className="container">
          <h1 className={styles.pageBannerTitle}>Shop Crop Tops</h1>
          <p className={styles.pageBannerSubtitle}>Teal, black & white — every style.</p>
        </div>
      </div>
      <div className="container">
        <header className={styles.header}>
          <p className={styles.productCount}>
            {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
          </p>
        </header>

        <div className={styles.layout}>
          <aside className={styles.filters}>
            <h3>Category</h3>
            <ul>
              <li>
                <button
                  className={!category ? styles.active : ''}
                  onClick={() => setFilter('category', '')}
                >
                  All
                </button>
              </li>
              {productCategories.map((cat) => (
                <li key={cat.id}>
                  <button
                    className={category === cat.id ? styles.active : ''}
                    onClick={() => setFilter('category', cat.id)}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
            <h3>Color</h3>
            <ul>
              <li>
                <button
                  className={!color ? styles.active : ''}
                  onClick={() => setFilter('color', '')}
                >
                  All
                </button>
              </li>
              {colors.map((c) => (
                <li key={c}>
                  <button
                    className={color === c ? styles.active : ''}
                    onClick={() => setFilter('color', c)}
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className={styles.grid}>
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {filtered.length === 0 && (
          <p className={styles.empty}>No products match your filters. Try different options.</p>
        )}
      </div>
    </div>
  )
}
