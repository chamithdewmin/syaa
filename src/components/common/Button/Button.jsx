import './Button.css';

/**
 * Reusable Button Component
 * Supports multiple variants and sizes with modern animations
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  fullWidth = false,
  ...props
}) => {
  const buttonClasses = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && 'btn--full-width',
    disabled && 'btn--disabled',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <span className="btn-content">{children}</span>
      <span className="btn-ripple"></span>
    </button>
  );
};
