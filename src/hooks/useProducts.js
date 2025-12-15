import { useState, useEffect } from 'react';
import { productService } from '../services/productService';

/**
 * Custom hook for product data management
 * Handles loading, error states, and product operations
 */
export const useProducts = (initialParams = {}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [params, setParams] = useState(initialParams);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await productService.getAll(params);
        setProducts(response.data);
      } catch (err) {
        setError(err.message || 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [params]);

  const refetch = async () => {
    try {
      setLoading(true);
      const response = await productService.getAll(params);
      setProducts(response.data);
    } catch (err) {
      setError(err.message || 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  return {
    products,
    loading,
    error,
    refetch,
    setParams,
  };
};

