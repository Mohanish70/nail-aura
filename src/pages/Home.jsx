import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import AiFitImage from '../assets/ai-fit.webp';
import customImage from '../assets/classic.webp';
import featuredImage from '../assets/classics.webp';
import ctaimage from '../assets/cta.webp';
import deliveryImage from '../assets/delivery.webp';
import livePreviewImage from '../assets/live.webp';
import newimage from '../assets/ners.png';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`home-container ${darkMode ? 'dark' : ''}`}>
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src={newimage} alt="Nail Aura Logo" className="logo" />
          <h1 className="logo-text">Nail Aura</h1>
        </div>
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/try-nails">Try Customizer</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Welcome to <span className="brand-name">Nail Aura</span></h1>
          <p>✨ AI-powered press-on nails made just for you</p>
          <p>🚚 Trendy, durable, and delivered across India</p>
          <div className="hero-buttons">
            <Link to="/shop" className="btn">Shop Now</Link>
            <Link to="/try-nails" className="btn-outline">Try Customizer</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={ctaimage} alt="Nail Customizer Preview" loading="lazy" />
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <h2>Why Nail Aura?</h2>
        <div className="features">
          <div className="feature">
            <img src={AiFitImage} alt="AI Fit" />
            <h3>🤖 AI Fit</h3>
            <p>Smart sizing and styling for your nails</p>
          </div>
          <div className="feature">
            <img src={livePreviewImage} alt="Live Preview" />
            <h3>📸 Live Preview</h3>
            <p>Try nails in real-time before buying</p>
          </div>
          <div className="feature">
            <img src={deliveryImage} alt="Fast Delivery" />
            <h3>🚚 48-Hour Delivery</h3>
            <p>Get glam nails quickly across India</p>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="collections-section">
        <h2>✨ Featured Collections</h2>
        <div className="collections">
          <article className="collection-card">
            <img src={featuredImage} alt="Classic Elegance" />
            <h4>Classic Elegance</h4>
            <Link to="/shop">Shop Now</Link>
          </article>
          <article className="collection-card">
            <img src={customImage} alt="Glam Up" />
            <h4>Glam Up</h4>
            <Link to="/shop">Shop Now</Link>
          </article>
          <article className="collection-card">
            <img src={newimage} alt="Seasonal Trends" />
            <h4>Seasonal Trends</h4>
            <Link to="/shop">Shop Now</Link>
          </article>
        </div>
      </section>

      {/* Recently Viewed */}
      <section className="recently-viewed-section">
        <h2>🕵️ Recently Viewed</h2>
        <div className="recent-items">
          <div className="product-card">
            <img src="/assets/sample1.webp" alt="Product" />
            <h4>Matte Nude</h4>
            <Link to="/shop">View</Link>
          </div>
          <div className="product-card">
            <img src="/assets/sample2.webp" alt="Product" />
            <h4>Gloss Red</h4>
            <Link to="/shop">View</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>💬 What Our Customers Say</h2>
        <div className="testimonials">
          <div className="testimonial">“I loved how accurate the sizing was!” – Riya</div>
          <div className="testimonial">“Live preview made it easy to decide!” – Nisha</div>
          <div className="testimonial">“Fast shipping and fab nails!” – Anshika Chetwani</div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">

        <h2>📩 Get Nail Vibes in Your Inbox</h2>
        <p>Subscribe for exclusive offers and nail tips!</p>
        <p>Join our community of nail enthusiasts and never miss out on the latest trends!</p>
        <p>Be the first to know about our new arrivals, special promotions, and nail care tips!</p>
        
        <form className="newsletter-form">
          <input type="email" placeholder="mohanishlalwani122@gmail.com" />
          <input type="text" placeholder="Mohanish Lalwani" />

          <button type="submit">Subscribe</button>
          <p>We respect your privacy. Unsubscribe at any time.</p>
          <p>By subscribing, you agree to our <Link to="/privacy-policy">Privacy Policy</Link>.</p>
                  </form>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>✨ Ready to Elevate Your Nails?</h2>
        <p>Try our customizer and find your perfect fit today!</p>
        <Link to="/try-nails" className="btn-big">Try Customizer Now</Link>
        <p>Or explore our shop for the latest trends.</p>
        <Link to="/shop" className="btn-outline">Shop Now</Link>'
        
        
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-logo">
          <img src={newimage} alt="Nail Aura Logo" />
          <h1>Nail Aura</h1>
        </div>
        <p>✨ AI-powered press-on nails made just for you</p>
        <p>🚚 Trendy, durable, and delivered across India</p >
        <p>📞 Contact: +91 7083121340</p>
        <p>&copy; {new Date().getFullYear()} Nail Aura. All rights reserved.</p>
        <p>Follow us on:</p>
        <div className="social-links">
          <a href="https://www.instagram.com/nailaura.in/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/nailaura.in" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.pinterest.com/nailaura.in/" target="_blank" rel="noopener noreferrer">Pinterest</a>
          <a href="https://www.linkedin.com/company/nail-aura/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p>Explore:</p>
        <ul>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms-of-service">Terms of Service</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </footer>

      {/* Floating Buttons */}
      <Link to="/wishlist" className="floating-button floating-wishlist">❤️</Link>
<Link to="/profile" className="floating-button floating-profile">👤</Link>
<Link to="/shop" className="floating-button floating-shop">🛍️</Link>
<Link to="/checkout" className="floating-button floating-checkout">💳</Link>
<Link to="/about" className="floating-button floating-about">ℹ️</Link>
<Link to="/contact" className="floating-button floating-contact">📞</Link>
<Link to="/cart" className="floating-button floating-cart">🛒</Link>
<button className="scroll-to-top" onClick={scrollToTop}>⬆️</button>
      <Link to="/shop" className="floating-button floating-shop">🛍️</Link>
      <button className="scroll-to-top" onClick={scrollToTop}>⬆️</button>
    </div>
  );
};

export default Home;
