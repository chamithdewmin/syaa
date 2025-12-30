import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__heading">SAYAA</h3>
            <p className="footer__text">
              Your destination for premium crop tops. Discover the latest trends in fashion 
              with our curated collection of stylish and comfortable crop tops.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__section">
            <h4 className="footer__subheading">Shop</h4>
            <ul className="footer__links">
              <li><Link to="/products">All Crop Tops</Link></li>
              <li><Link to="/products?filter=new">New Arrivals</Link></li>
              <li><Link to="/products?filter=sale">Sale</Link></li>
              <li><Link to="/products?filter=bestseller">Best Sellers</Link></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__subheading">Company</h4>
            <ul className="footer__links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#shipping">Shipping Info</a></li>
              <li><a href="#returns">Returns</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__subheading">Customer Care</h4>
            <ul className="footer__links">
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#size-guide">Size Guide</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} SAYAA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
