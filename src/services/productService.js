import apiClient from './api/client';

/**
 * Product Service
 * Handles all product-related API calls
 */

export const productService = {
  /**
   * Get all products
   * @param {Object} params - Query parameters (filters, pagination, etc.)
   * @returns {Promise} API response
   */
  getAll: (params = {}) => {
    return apiClient.get('/products', { params });
  },

  /**
   * Get product by ID
   * @param {string|number} id - Product ID
   * @returns {Promise} API response
   */
  getById: (id) => {
    return apiClient.get(`/products/${id}`);
  },

  /**
   * Create new product
   * @param {Object} data - Product data
   * @returns {Promise} API response
   */
  create: (data) => {
    return apiClient.post('/products', data);
  },

  /**
   * Update product
   * @param {string|number} id - Product ID
   * @param {Object} data - Updated product data
   * @returns {Promise} API response
   */
  update: (id, data) => {
    return apiClient.put(`/products/${id}`, data);
  },

  /**
   * Delete product
   * @param {string|number} id - Product ID
   * @returns {Promise} API response
   */
  delete: (id) => {
    return apiClient.delete(`/products/${id}`);
  },

  /**
   * Search products
   * @param {string} query - Search query
   * @returns {Promise} API response
   */
  search: (query) => {
    return apiClient.get('/products/search', { params: { q: query } });
  },
};

