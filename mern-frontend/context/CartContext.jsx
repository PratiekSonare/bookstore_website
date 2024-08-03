// context/CartContext.js
import React, { createContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART':
      return action.payload;
    case 'ADD_TO_CART':
      const itemIndex = state.items.findIndex(item => item.bookId === action.payload.bookId);
      if (itemIndex > -1) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push(action.payload);
      }
      return { ...state };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.bookId !== action.payload)
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });

  useEffect(() => {
    // Fetch initial cart from server
    const fetchCart = async () => {
      const res = await fetch(`/cart/${userId}`);
      const data = await res.json();
      dispatch({ type: 'SET_CART', payload: data });
    };
    fetchCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
