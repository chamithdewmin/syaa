import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import './Header.css';

export const Header = () => {
  const { getCartItemCount } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo" onClick={closeMobileMenu}>
          <span className="header__logo-text">SAYAA</span>
        </Link>

        <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
          <Link to="/" className="header__nav-link" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to="/products" className="header__nav-link" onClick={closeMobileMenu}>
            Shop
          </Link>
          <Link to="/about" className="header__nav-link" onClick={closeMobileMenu}>
            About
          </Link>
          <Link to="/contact" className="header__nav-link" onClick={closeMobileMenu}>
            Contact
          </Link>
        </nav>

        <div className="header__actions">
          <form onSubmit={handleSearch} className="header__search-form">
            <input
              type="text"
              placeholder="Search crop tops..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="header__search-input"
            />
            <button type="submit" className="header__search-btn" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </form>

          <Link to="/cart" className="header__cart-btn" aria-label="Cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {getCartItemCount() > 0 && (
              <span className="header__cart-badge">{getCartItemCount()}</span>
            )}
          </Link>

          <button
            className="header__menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`header__hamburger ${isMobileMenuOpen ? 'header__hamburger--active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
