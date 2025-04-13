// src/pages/Wishlist.jsx
import React from 'react';

const Wishlist = () => {
  return (
    <div style={styles.container}>
      <h1>My Wishlist</h1>
      <p>Items you’ve saved for later.</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
  },
};

export default Wishlist; // ✅ Important
