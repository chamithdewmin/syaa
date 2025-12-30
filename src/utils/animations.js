/**
 * Animation utilities for scroll-triggered animations
 */

export const observeElements = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  return observer;
};

export const setupScrollAnimations = () => {
  const observer = observeElements();
  const animatedElements = document.querySelectorAll('[data-animate]');
  
  animatedElements.forEach(el => observer.observe(el));
  
  return () => {
    animatedElements.forEach(el => observer.unobserve(el));
  };
};

