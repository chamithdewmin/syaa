import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ROUTES } from '../config/routes';

/**
 * Public Route Component
 * Redirects authenticated users away from public-only pages (login, register)
 */
export const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or your loading component
  }

  if (user) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return children;
};

