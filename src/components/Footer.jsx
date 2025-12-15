import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">KANDY</span>
            </div>
            <p className="footer-welcome">
              Welcome to www.kandyselection.lk. Reserve your dress now before it's too late. You can get in touch with us via
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="snowflake-icon">❄</span>
                <a href="tel:+94707788688">+94 70 778 8688</a>
              </div>
              <div className="contact-item">
                <span className="snowflake-icon">❄</span>
                <a href="mailto:online@kandyselection.lk">online@kandyselection.lk</a>
              </div>
            </div>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h4>IMPORTANT LINKS</h4>
            <ul>
              <li><a href="#returns">Returns & Exchange Policy</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Condition</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>QUICK CATEGORIES</h4>
            <ul>
              <li><a href="#new-arrivals">New Arrivals</a></li>
              <li><a href="#office-wear">Women's Office Wear</a></li>
              <li><a href="#party-wear">Women's Party Wear</a></li>
              <li><a href="#budget-tees">Budget Tees</a></li>
              <li><a href="#jewellery">Jewellery</a></li>
              <li><a href="#footwear">Footwear</a></li>
              <li><a href="#wallets">Wallets and Purses</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>ACCOUNT</h4>
            <ul>
              <li><a href="#account">My Account</a></li>
              <li><a href="#orders">Order History</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>HELP</h4>
            <ul>
              <li><a href="#whatsapp">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>©kandyselection.lk. All rights reserved</p>
            <p>
              Website by <a href="#aurora">Aurora 365 Pvt Ltd</a>
            </p>
            <div className="payment-methods">
              <span className="payment-method">CASH ON DELIVERY</span>
              <span className="payment-method">BANK TRANSFER</span>
              <span className="payment-method">VISA</span>
              <span className="payment-method">Mastercard</span>
              <span className="payment-method">KOKO</span>
              <span className="payment-method">PayZy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

