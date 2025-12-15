# Enterprise React Project Structure

## 📁 Complete Folder Tree

```
src/
├── assets/                    # Static assets
│   ├── images/
│   │   ├── logos/
│   │   ├── icons/
│   │   └── backgrounds/
│   ├── fonts/
│   └── videos/
│
├── components/                # Reusable UI components
│   ├── common/               # Shared/common components
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   ├── Button.module.css
│   │   │   └── index.js
│   │   ├── Input/
│   │   ├── Card/
│   │   ├── Modal/
│   │   ├── Loading/
│   │   └── index.js
│   │
│   ├── layout/               # Layout components
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Sidebar/
│   │   ├── Navbar/
│   │   └── index.js
│   │
│   └── features/             # Feature-specific components
│       ├── products/
│       │   ├── ProductCard/
│       │   ├── ProductGrid/
│       │   └── ProductFilters/
│       └── cart/
│           ├── CartItem/
│           └── CartSummary/
│
├── pages/                    # Route-based page components
│   ├── Home/
│   │   ├── Home.jsx
│   │   ├── Home.module.css
│   │   └── index.js
│   ├── Products/
│   │   ├── Products.jsx
│   │   ├── ProductsList.jsx
│   │   └── index.js
│   ├── ProductDetail/
│   ├── Cart/
│   ├── Checkout/
│   ├── NotFound/
│   └── index.js
│
├── layouts/                  # Layout wrappers
│   ├── MainLayout/
│   │   ├── MainLayout.jsx
│   │   └── index.js
│   ├── AuthLayout/
│   └── AdminLayout/
│
├── hooks/                    # Custom React hooks
│   ├── useAuth.js
│   ├── useCart.js
│   ├── useProducts.js
│   ├── useLocalStorage.js
│   ├── useDebounce.js
│   └── useMediaQuery.js
│
├── services/                 # API & external services
│   ├── api/
│   │   ├── client.js         # Axios/fetch setup
│   │   ├── endpoints.js      # API endpoints
│   │   └── interceptors.js  # Request/response interceptors
│   │
│   ├── productService.js
│   ├── cartService.js
│   ├── authService.js
│   └── orderService.js
│
├── contexts/                 # React Context providers
│   ├── AuthContext/
│   │   ├── AuthContext.jsx
│   │   ├── AuthProvider.jsx
│   │   └── index.js
│   ├── CartContext/
│   ├── ThemeContext/
│   └── index.js
│
├── store/                    # State management (Redux Toolkit)
│   ├── slices/
│   │   ├── authSlice.js
│   │   ├── cartSlice.js
│   │   └── productSlice.js
│   ├── store.js
│   └── hooks.js
│
├── utils/                    # Utility functions
│   ├── formatters.js         # Date, currency, etc.
│   ├── validators.js         # Form validation
│   ├── constants.js          # App constants
│   ├── helpers.js            # General helpers
│   └── index.js
│
├── config/                   # Configuration files
│   ├── routes.js             # Route definitions
│   ├── env.js                # Environment config
│   └── constants.js
│
├── styles/                   # Global styles
│   ├── globals.css
│   ├── variables.css         # CSS variables
│   ├── reset.css
│   └── themes.css
│
├── types/                    # TypeScript types (if using TS)
│   ├── product.types.ts
│   ├── user.types.ts
│   └── api.types.ts
│
├── routes/                   # Route configuration
│   ├── AppRoutes.jsx
│   ├── PrivateRoute.jsx
│   └── PublicRoute.jsx
│
├── App.jsx                   # Root component
├── main.jsx                  # Entry point
└── index.css                 # Base styles

public/
├── favicon.ico
├── robots.txt
└── manifest.json

tests/                        # Test files (optional)
├── components/
├── pages/
└── utils/

docs/                         # Documentation
├── API.md
└── COMPONENTS.md
```

## 📋 Folder Explanations

### `/src/assets/`
**Purpose**: Static files that don't need processing
- Images, fonts, videos
- Organized by type for easy maintenance
- **Example**: `logo.png`, `custom-font.woff2`

### `/src/components/`
**Purpose**: Reusable UI components organized by scope
- **`common/`**: Shared components used across features (Button, Input, Modal)
- **`layout/`**: Layout-specific components (Header, Footer, Sidebar)
- **`features/`**: Feature-specific components (ProductCard, CartItem)
- **Pattern**: Each component has its own folder with component file, styles, and index.js

### `/src/pages/`
**Purpose**: Route-based page components (one per route)
- Each page is a self-contained module
- Can contain sub-components specific to that page
- **Example**: `Home.jsx`, `Products.jsx`, `ProductDetail.jsx`

### `/src/layouts/`
**Purpose**: Layout wrappers that provide structure
- **MainLayout**: Default layout with header/footer
- **AuthLayout**: Layout for auth pages (login, signup)
- **AdminLayout**: Layout for admin dashboard

### `/src/hooks/`
**Purpose**: Custom React hooks for reusable logic
- **Example hooks**:
  - `useAuth`: Authentication state/logic
  - `useCart`: Cart operations
  - `useDebounce`: Debounce values
  - `useMediaQuery`: Responsive breakpoints

### `/src/services/`
**Purpose**: API calls and external service integrations
- **`api/`**: HTTP client setup, endpoints, interceptors
- **Service files**: Feature-specific API logic
- **Pattern**: One service file per domain (products, cart, auth)

### `/src/contexts/`
**Purpose**: React Context for global state
- Each context has its own folder with provider and context
- **Example**: AuthContext, CartContext, ThemeContext
- Alternative to Redux for simpler state needs

### `/src/store/`
**Purpose**: Redux Toolkit store (if using Redux)
- **`slices/`**: Feature-based Redux slices
- **`store.js`**: Store configuration
- **`hooks.js`**: Typed hooks (useAppDispatch, useAppSelector)

### `/src/utils/`
**Purpose**: Pure utility functions
- **`formatters.js`**: Format dates, currency, numbers
- **`validators.js`**: Validation functions
- **`constants.js`**: App-wide constants
- **`helpers.js`**: General helper functions

### `/src/config/`
**Purpose**: Configuration and constants
- **`routes.js`**: Route path constants
- **`env.js`**: Environment variable handling
- Centralized configuration

### `/src/styles/`
**Purpose**: Global styles and CSS variables
- **`globals.css`**: Global styles
- **`variables.css`**: CSS custom properties
- **`reset.css`**: CSS reset
- **`themes.css`**: Theme definitions

### `/src/routes/`
**Purpose**: Route configuration and guards
- **`AppRoutes.jsx`**: Main routing configuration
- **`PrivateRoute.jsx`**: Protected route wrapper
- **`PublicRoute.jsx`**: Public-only route wrapper

## 🎯 Key Patterns & Conventions

### Component Structure
```javascript
// components/common/Button/Button.jsx
import styles from './Button.module.css';

export const Button = ({ children, variant, onClick, ...props }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

// components/common/Button/index.js
export { Button } from './Button';
```

### Service Pattern
```javascript
// services/api/client.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

// Request interceptor
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;

// services/productService.js
import apiClient from './api/client';

export const productService = {
  getAll: () => apiClient.get('/products'),
  getById: (id) => apiClient.get(`/products/${id}`),
  create: (data) => apiClient.post('/products', data),
  update: (id, data) => apiClient.put(`/products/${id}`, data),
  delete: (id) => apiClient.delete(`/products/${id}`),
};
```

### Context Pattern
```javascript
// contexts/AuthContext/AuthContext.jsx
import { createContext } from 'react';

export const AuthContext = createContext(null);

// contexts/AuthContext/AuthProvider.jsx
import { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Auth logic here

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
```

### Custom Hook Pattern
```javascript
// hooks/useAuth.js
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
```

## 🚀 Getting Started

1. **Create the folder structure**:
```bash
mkdir -p src/{assets/{images/{logos,icons,backgrounds},fonts,videos},components/{common,layout,features},pages,layouts,hooks,services/api,contexts,store/slices,utils,config,styles,types,routes}
```

2. **Install dependencies**:
```bash
npm install react-router-dom axios
# If using Redux Toolkit:
npm install @reduxjs/toolkit react-redux
# If using TypeScript:
npm install -D typescript @types/react @types/react-dom
```

3. **Set up environment variables**:
```bash
# .env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=Your App Name
```

## 📝 Best Practices

✅ **DO**:
- Use index.js files for clean imports
- Keep components small and focused
- Use feature-based organization for large features
- Separate concerns (UI, logic, data)
- Use TypeScript for type safety
- Write reusable hooks
- Centralize API calls in services

❌ **DON'T**:
- Mix business logic in components
- Create deeply nested folders
- Duplicate code across features
- Put everything in one file
- Hardcode configuration values

## 🎨 UI Practices

- **CSS Modules** for component-scoped styles
- **CSS Variables** for theming
- **Tailwind CSS** (optional) for utility-first styling
- **Responsive design** with mobile-first approach
- **Accessibility** (ARIA labels, semantic HTML)
- **Component composition** over inheritance

---

**Use modern UI practices, clean component separation, and support Tailwind CSS / CSS Modules.**

