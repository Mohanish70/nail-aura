import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/nailauralogo.webp';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();

  const commonLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/cart', label: 'Cart' },
    { to: '/checkout', label: 'Checkout' },
    { to: '/try-nails', label: 'Try Nails' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const userLinks = [
    { to: '/profile', label: 'Profile' },
    { to: '/orders', label: 'Orders' },
    { to: '/wishlist', label: 'Wishlist' },
  ];

  const guestLinks = [
    { to: '/login', label: 'Login' },
    { to: '/register', label: 'Register' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Nail Aura</Link>
        <img src={logo} alt="Nail Aura Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        {commonLinks.map((link) => (
          <li key={link.to}><Link to={link.to}>{link.label}</Link></li>
        ))}
        {user ? (
          <>
            {userLinks.map((link) => (
              <li key={link.to}><Link to={link.to}>{link.label}</Link></li>
            ))}
            <li><button onClick={logout} className="logout-btn">Logout</button></li>
          </>
        ) : (
          guestLinks.map((link) => (
            <li key={link.to}><Link to={link.to}>{link.label}</Link></li>
          ))
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
