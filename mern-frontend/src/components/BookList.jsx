// components/BookList.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const BookList = ({ books }) => {
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = async (bookId) => {
    await fetch(`/cart/${userId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bookId })
    });
    dispatch({ type: 'ADD_TO_CART', payload: { bookId, quantity: 1 } });
  };

  return (
    <div>
      {books.map(book => (
        <div key={book._id}>
          <h3>{book.title}</h3>
          <button onClick={() => handleAddToCart(book._id)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
