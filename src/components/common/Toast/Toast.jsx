import { useEffect } from 'react';
import './Toast.css';

export const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div className={`toast toast--${type}`}>
      <div className="toast__content">
        <span className="toast__icon">
          {type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}
        </span>
        <span className="toast__message">{message}</span>
      </div>
      <button className="toast__close" onClick={onClose} aria-label="Close">
        ×
      </button>
    </div>
  );
};

export const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
          duration={toast.duration}
        />
      ))}
    </div>
  );
};

