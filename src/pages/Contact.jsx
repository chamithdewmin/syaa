import { useState, useEffect } from 'react';
import { Button } from '../components/common/Button';
import { useToast } from '../contexts/ToastContext';
import { setupScrollAnimations } from '../utils/animations';
import './Contact.css';

export const Contact = () => {
  const { addToast } = useToast();

  useEffect(() => {
    const cleanup = setupScrollAnimations();
    return cleanup;
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
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
      addToast('Message sent successfully! We\'ll get back to you soon.', 'success', 5000);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="contact-page">
      <div className="contact-page__hero" data-animate="fade-in-down">
        <div className="container">
          <h1 className="contact-page__title">Get in Touch</h1>
          <p className="contact-page__subtitle">We'd love to hear from you</p>
        </div>
      </div>

      <div className="container">
        <div className="contact">
          <div className="contact__info" data-animate="fade-in-left">
            <h2 className="contact__info-title">Contact Information</h2>
            <p className="contact__info-text">
              Have a question or need assistance? Reach out to us through any of the 
              channels below, and we'll be happy to help.
            </p>

            <div className="contact__details animate-stagger">
              <div className="contact__detail">
                <div className="contact__detail-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:hello@sayaa.com">hello@sayaa.com</a>
                </div>
              </div>

              <div className="contact__detail">
                <div className="contact__detail-icon">📱</div>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
              </div>

              <div className="contact__detail">
                <div className="contact__detail-icon">📍</div>
                <div>
                  <h3>Address</h3>
                  <p>123 Fashion Street<br />New York, NY 10001</p>
                </div>
              </div>

              <div className="contact__detail">
                <div className="contact__detail-icon">🕒</div>
                <div>
                  <h3>Hours</h3>
                  <p>Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm</p>
                </div>
              </div>
            </div>

            <div className="contact__social">
              <h3>Follow Us</h3>
              <div className="contact__social-links">
                <a href="#" className="contact__social-link" aria-label="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#" className="contact__social-link" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" className="contact__social-link" aria-label="Twitter">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="contact__form-section" data-animate="fade-in-right">
            <h2 className="contact__form-title">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact__form">
              <div className="contact__form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'contact__input--error' : ''}
                  placeholder="Your name"
                />
                {errors.name && <span className="contact__error">{errors.name}</span>}
              </div>

              <div className="contact__form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'contact__input--error' : ''}
                  placeholder="your.email@example.com"
                />
                {errors.email && <span className="contact__error">{errors.email}</span>}
              </div>

              <div className="contact__form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? 'contact__input--error' : ''}
                  placeholder="What's this about?"
                />
                {errors.subject && <span className="contact__error">{errors.subject}</span>}
              </div>

              <div className="contact__form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'contact__input--error' : ''}
                  rows="6"
                  placeholder="Tell us more..."
                />
                {errors.message && <span className="contact__error">{errors.message}</span>}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="large"
                fullWidth
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

