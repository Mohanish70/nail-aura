import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    alert('Order placed successfully!');
    clearCart();
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cart.length ? (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ₹{item.price}</li>
            ))}
          </ul>
          <h3>Total: ₹{total}</h3>
          <button onClick={handleCheckout}>Place Order</button>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Checkout;
