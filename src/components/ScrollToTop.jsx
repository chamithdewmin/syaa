import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component that scrolls to top on route change
 * Uses instant scroll for product detail pages to ensure immediate positioning
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use instant scroll for product detail pages, smooth for others
    const isProductDetail = pathname.includes('/products/') && pathname !== '/products';
    
    if (isProductDetail) {
      // Instant scroll for product detail pages
      window.scrollTo(0, 0);
    } else {
      // Smooth scroll for other pages
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [pathname]);

  return null;
};

