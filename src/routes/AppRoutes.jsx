import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

// Pages
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { ProductDetail } from '../pages/ProductDetail';
import { Cart } from '../pages/Cart';
import { Checkout } from '../pages/Checkout';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Profile } from '../pages/Profile';
import { Orders } from '../pages/Orders';
import { NotFound } from '../pages/NotFound';

/**
 * Main application routes configuration
 */
export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.PRODUCTS} element={<Products />} />
      <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
      <Route path={ROUTES.CART} element={<Cart />} />
      
      {/* Auth Routes (Public only - redirect if logged in) */}
      <Route
        path={ROUTES.LOGIN}
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path={ROUTES.REGISTER}
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      
      {/* Protected Routes */}
      <Route
        path={ROUTES.CHECKOUT}
        element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTES.PROFILE}
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTES.ORDERS}
        element={
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        }
      />
      
      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

