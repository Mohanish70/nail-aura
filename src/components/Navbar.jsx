import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/nailauralogo.webp';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';
const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Nail Aura</Link>
        <img src={logo} alt="Nail Aura Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
        <li><Link to="/try-nails">Try Nails</Link></li>
        {user?.isAdmin && <li><Link to="/admin">Admin</Link></li>}

        {!user ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        ) : (
          <li>
            <button onClick={logout} className="logout-btn">Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
