import './LoadingSkeleton.css';

export const ProductCardSkeleton = () => {
  return (
    <div className="skeleton skeleton-product-card">
      <div className="skeleton__image"></div>
      <div className="skeleton__content">
        <div className="skeleton__line skeleton__line--title"></div>
        <div className="skeleton__line skeleton__line--rating"></div>
        <div className="skeleton__line skeleton__line--price"></div>
      </div>
    </div>
  );
};

export const ProductGridSkeleton = ({ count = 8 }) => {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};

