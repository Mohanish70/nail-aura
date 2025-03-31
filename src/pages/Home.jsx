import React from 'react';
import { Link } from 'react-router-dom';
import AiFitImage from '../assets/ai-fit.webp';
import customImage from '../assets/classic.webp';
import featuredImage from '../assets/classics.webp'; // Correct path to the image
import ctaimage from '../assets/cta.webp';
import deliveryImage from '../assets/delivery.webp';
import livePreviewImage from '../assets/live.webp';
import newimage from '../assets/ners.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Header Section with Logo */}
      <header className="header">
        <div className="logo-container">
          <Link to="/">
            
          </Link>
        </div>
      
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Welcome to <span className="brand-name">Nail Aura</span></h1>
          <p>Your one-stop destination for custom press-on nails.</p>
          <p>Get trendy, high-quality nails delivered to your doorstep!</p>

          <p>Explore AI-powered custom press-on nails tailored just for you.</p>
          <div className="hero-buttons">
            <Link to="/shop" className="btn">Shop Now</Link>
            <Link to="/try-nails" className="btn-outline">Try Nail Customizer</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={ctaimage} alt="Nail Art" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">

        <h2>Why Nail Aura?</h2>
        <div className="features">
          <div className="feature">
            <img src={AiFitImage} alt="AI Fit" />
            <h3>🤖 AI Fit</h3>
            <p>Smart sizing and style suggestions for your unique hand and nail shape.</p>
          </div>
          <div className="feature">
            <img src={livePreviewImage} alt="Live Preview" />
            <h3>📸 Live Preview</h3>
            <p>Use your camera to preview nails in real-time before you buy!</p>
          </div>
          <div className="feature">
            <img src={deliveryImage} alt="Fast Delivery" />
            <h3>🚚 48-Hour Delivery</h3>
            <p>Get your custom nails shipped fast — across all of India!</p>
            
          </div>
            
        </div>
      </section>

      {/* Featured Collections */}
      <section className="collections-section">
        <h2>✨ Featured Collections</h2>
        <div className="collections">
          <div className="collection-card">
            <img src={featuredImage} alt="Classic" />
            <h4>Classic Elegance</h4>
            <Link to="/shop">Shop Classic</Link>
          </div>
          <div className="collection-card">
            <img src={customImage} alt="Glam" />
            <h4>Glam Up</h4>
            <Link to="/shop">Shop Glam</Link>
          </div>
          <div className="collection-card">
            <img src={newimage} alt="Seasonal" />
            <h4>Seasonal Trends</h4>
            <Link to="/shop">Shop Trends</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>💬 Happy Customers</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"Absolutely loved how the nails fit me perfectly! The AI sizing is game-changing!"</p>
            <span>– Riya S., Mumbai</span>
          </div>
          <div className="testimonial">
            <p>"The live camera preview helped me decide instantly. So cool!"</p>
            <span>– Nisha K., Bangalore</span>
          </div>
          <div className="testimonial">
            <p>"Ordered and received within 2 days! Super quality and trendy designs."</p>
            <span>– Anjali T., Delhi</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Elevate Your Nails?</h2>
        <Link to="/try-nails" className="btn-big">Try Customizer Now</Link>
      </section>

      {/* Footer Section */}
      <footer className="home-footer">
        

      </footer>
    </div>
  );
};

export default Home;
