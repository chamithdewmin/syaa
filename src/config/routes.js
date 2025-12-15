/**
 * Route path constants
 * Centralized route definitions for easy maintenance
 */

export const ROUTES = {
  // Public routes
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/products/:id',
  CART: '/cart',
  CHECKOUT: '/checkout',
  
  // Auth routes
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  
  // Protected routes
  PROFILE: '/profile',
  ORDERS: '/orders',
  ORDER_DETAIL: '/orders/:id',
  
  // Admin routes
  ADMIN: '/admin',
  ADMIN_PRODUCTS: '/admin/products',
  ADMIN_ORDERS: '/admin/orders',
  
  // Error routes
  NOT_FOUND: '/404',
};

/**
 * Helper function to generate route with params
 * @param {string} route - Route path
 * @param {Object} params - Route parameters
 * @returns {string} Generated route path
 */
export const generateRoute = (route, params = {}) => {
  let generatedRoute = route;
  Object.keys(params).forEach((key) => {
    generatedRoute = generatedRoute.replace(`:${key}`, params[key]);
  });
  return generatedRoute;
};

