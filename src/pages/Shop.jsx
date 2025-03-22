import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { ProductContext } from '../context/ProductContext';
import "../styles/Shop.css";


const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h2>Shop All Nails</h2>
      <div className="product-grid">
        {products.length ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products available yet.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
