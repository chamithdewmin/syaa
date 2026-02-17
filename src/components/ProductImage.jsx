// Sample product image: use URL when available, fallback to colored placeholder
import { useState } from 'react'

const colorMap = {
  Teal: '#0d9488',
  Black: '#1a1a1a',
  White: '#f5f5f5',
}

function PlaceholderBlock({ product, className }) {
  const bg = colorMap[product.color] || '#0d9488'
  const isLight = product.color === 'White'
  return (
    <div
      className={className}
      style={{
        width: '100%',
        height: '100%',
        background: bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          fontSize: '1.5rem',
          opacity: 0.5,
          color: isLight ? '#333' : '#fff',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontWeight: 700,
        }}
      >
        {product.category}
      </span>
    </div>
  )
}

export default function ProductImage({ product, className = '' }) {
  const [failed, setFailed] = useState(false)
  const isSampleUrl = product.image && (product.image.startsWith('http://') || product.image.startsWith('https://'))

  if (failed || !isSampleUrl) {
    return <PlaceholderBlock product={product} className={className} />
  }

  return (
    <img
      src={product.image}
      alt={product.name}
      className={className}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}
