import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length ? (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.url} alt={item.name} style={{ width: 80 }} />
              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
