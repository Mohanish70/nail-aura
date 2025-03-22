import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Check if products are available in localStorage
    const storedProducts = JSON.parse(localStorage.getItem('nails'));

    if (storedProducts) {
      // If products are in localStorage, use them
      setProducts(storedProducts);
    } else {
      // Fallback to hardcoded initial products if not in localStorage
      const initialProducts = [
        {
          id: 1,
          name: "Classic Elegance",
          description: "Classic elegance with a modern twist.",
          image: "/assets/classic-nail.webp", // Replace with actual image path
          price: 299,
        },
        {
          id: 2,
          name: "Glam Up",
          description: "Glamorous nails for every occasion.",
          image: "/assets/glam-nail.webp", // Replace with actual image path
          price: 499,
        },
        {
          id: 3,
          name: "Seasonal Trends",
          description: "Stay on trend with seasonal designs.",
          image: "/assets/seasonal-nail.webp", // Replace with actual image path
          price: 399,
        },
      ];
      setProducts(initialProducts);
    }
  }, []);

  // Function to add a new product
  const addProduct = (newProduct) => {
    const updated = [...products, newProduct];
    setProducts(updated);
    localStorage.setItem('nails', JSON.stringify(updated)); // Save to localStorage
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
