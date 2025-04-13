import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CameraCustomizer from './components/CameraCustomizer';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile'; // ✅ New import
import Register from './pages/Register';
import Shop from './pages/Shop';
import Wishlist from './pages/Wishlist'; // ✅ New import for Wishlist
const App = () => {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <Navbar />
          <main style={{ minHeight: '80vh' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/try-nails" element={<CameraCustomizer />} />

              { 
                /* ✅ Admin Protected Route */
                /* Only accessible if the user is an admin */
                /* You can add more admin-only routes here */
                /* Example: <Route path="/admin" element={<Admin />} /> */
                /* This is a placeholder for your admin route */
                /* You can customize the path and component as needed */
                 <Route path="/admin" element={<Admin />} />
                /* This is a placeholder for your admin route */
                /* You can customize the path and component as needed */
              }
              <Route
                path="/admin"
                element={
                  <ProtectedRoute adminOnly>
                    <Admin />
                  </ProtectedRoute>
                }
              />

              {
                /* ✅ Profile Route */
                /* This is a placeholder for your profile route */
                /* You can customize the path and component as needed */
                <Route path="/profile" element={<Profile />} /> 
                /* This is a placeholder for your profile route */
                /* You can customize the path and component as needed */
                /* Example: <Route path="/profile" element={<Profile />} /> 
              }
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              {/* ✅ Wishlist Route */}
              <Route
                path="/wishlist"
                element={<Wishlist />} // You can make this protected if needed
              />
            </Routes>
          </main>
          <Footer />
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
};

export default App;
