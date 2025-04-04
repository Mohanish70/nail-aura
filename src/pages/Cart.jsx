import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  // Total calculation (checking if price exists in the item)
  const total = cart.reduce((acc, item) => (item.price ? acc + item.price : acc), 0);

  return (
    <div>
      <h2>Your Cart</h2>
      <p>Items in your cart: {cart.length}</p>
      <p>Click on the image to remove the item from the cart</p>
      <p>Click on the clear cart button to clear the cart</p>
      
      {cart.length ? (
        <div>
          {cart.map((item, index) => (
            <div key={item.id || index} className="cart-item"> {/* Use item.id if available */}
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
