import React from 'react';
import Shop from './Shop';
import CartSidebar from './Cartsidebar';
import { useCart } from '../components/CartContext';

const TempShop = () => {
  const { cart, setCart } = useCart();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const addToCart = (book) => {
    setCart(prevCart => [...prevCart, book]);
    setSidebarOpen(true); // Open the cart sidebar when an item is added
  };

  const removeFromCart = (bookId) => {
    setCart(prevCart => prevCart.filter(book => book._id !== bookId));
  };

  return (
    <div>
      <Shop addToCart={addToCart} />
      {sidebarOpen && (
        <CartSidebar
          cart={cart}
          onClose={() => setSidebarOpen(false)}
          onRemove={removeFromCart}
        />
      )}
    </div>
  );
};

export default TempShop;
