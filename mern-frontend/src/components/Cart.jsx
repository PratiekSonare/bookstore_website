// components/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const handleRemove = async (bookId) => {
    await fetch(`/cart/${userId}/${bookId}`, { method: 'DELETE' });
    dispatch({ type: 'REMOVE_FROM_CART', payload: bookId });
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.items.map(item => (
          <li key={item.bookId._id}>
            {item.bookId.title} - {item.quantity}
            <button onClick={() => handleRemove(item.bookId._id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
