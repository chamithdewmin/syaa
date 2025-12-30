import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../contexts/ToastContext';
import { formatCurrency } from '../utils/formatters';
import { Button } from '../components/common/Button';
import { setupScrollAnimations } from '../utils/animations';
import './Checkout.css';

export const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { addToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const cleanup = setupScrollAnimations();
    return cleanup;
  }, [cartItems]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'cod',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = getCartTotal();
  const shipping = subtotal > 5000 ? 0 : 500;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="checkout-empty" data-animate="fade-in-up">
            <h2>Your cart is empty</h2>
            <p>Add items to your cart before checkout</p>
            <Button variant="primary" size="large" onClick={() => navigate('/products')} data-animate="scale-in">
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Postal code is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      addToast('Order placed successfully!', 'success', 5000);
      clearCart();
      navigate('/');
    }, 1500);
  };

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="checkout-page__header" data-animate="fade-in-down">
          <h1>Checkout</h1>
        </div>

        <div className="checkout">
          <div className="checkout__form-section" data-animate="fade-in-right">
            <h2 className="checkout__section-title">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="checkout__form">
              <div className="checkout__form-row">
                <div className="checkout__form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? 'checkout__input--error' : ''}
                  />
                  {errors.firstName && <span className="checkout__error">{errors.firstName}</span>}
                </div>
                <div className="checkout__form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? 'checkout__input--error' : ''}
                  />
                  {errors.lastName && <span className="checkout__error">{errors.lastName}</span>}
                </div>
              </div>

              <div className="checkout__form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'checkout__input--error' : ''}
                />
                {errors.email && <span className="checkout__error">{errors.email}</span>}
              </div>

              <div className="checkout__form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'checkout__input--error' : ''}
                />
                {errors.phone && <span className="checkout__error">{errors.phone}</span>}
              </div>

              <div className="checkout__form-group">
                <label htmlFor="address">Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={errors.address ? 'checkout__input--error' : ''}
                />
                {errors.address && <span className="checkout__error">{errors.address}</span>}
              </div>

              <div className="checkout__form-row">
                <div className="checkout__form-group">
                  <label htmlFor="city">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={errors.city ? 'checkout__input--error' : ''}
                  />
                  {errors.city && <span className="checkout__error">{errors.city}</span>}
                </div>
                <div className="checkout__form-group">
                  <label htmlFor="postalCode">Postal Code *</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className={errors.postalCode ? 'checkout__input--error' : ''}
                  />
                  {errors.postalCode && <span className="checkout__error">{errors.postalCode}</span>}
                </div>
              </div>

              <div className="checkout__form-group">
                <label>Payment Method *</label>
                <div className="checkout__payment-options">
                  <label className="checkout__payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                    />
                    <span>Cash on Delivery</span>
                  </label>
                  <label className="checkout__payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                    />
                    <span>Credit/Debit Card</span>
                  </label>
                  <label className="checkout__payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleChange}
                    />
                    <span>PayPal</span>
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="large"
                fullWidth
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Placing Order...' : 'Place Order'}
              </Button>
            </form>
          </div>

          <div className="checkout__summary" data-animate="fade-in-left">
            <h2 className="checkout__section-title">Order Summary</h2>
            <div className="checkout__order-items animate-stagger">
              {cartItems.map((item, index) => (
                <div key={`${item.id}-${index}`} className="checkout__order-item">
                  <img src={item.images[0]} alt={item.name} className="checkout__order-image" />
                  <div className="checkout__order-info">
                    <h4>{item.name}</h4>
                    <p>Size: {item.selectedSize} | Color: {item.selectedColor}</p>
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <p className="checkout__order-price">
                    {formatCurrency(item.price * item.quantity, 'LKR')}
                  </p>
                </div>
              ))}
            </div>

            <div className="checkout__totals">
              <div className="checkout__total-row">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal, 'LKR')}</span>
              </div>
              <div className="checkout__total-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : formatCurrency(shipping, 'LKR')}</span>
              </div>
              <div className="checkout__total-row checkout__total-row--final">
                <span>Total</span>
                <span>{formatCurrency(total, 'LKR')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
