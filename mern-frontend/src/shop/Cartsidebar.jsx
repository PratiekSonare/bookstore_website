import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const CartSidebar = ({ cart, onClose, onRemove }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout', { state: { cartItems: cart } });
  };

  return (
    <div className={`fixed top-0 right-0 bottom-0 w-45 bg-white rounded-xl shadow-md transition-transform transform ${cart.length > 0 ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="overflow-y-auto h-[calc(100vh-80px)]">
        <div>
          <button onClick={onClose} className="fixed top-4 right-4 text-lg mt-20">
            &times;
          </button>
          <h2 className="text-xl font-bold p-4 mt-20">Cart</h2>
        </div>
        <ul>
          {cart.length > 0 ? (
            cart.map((book, index) => (
              <li key={index} className="p-4 border-b flex flex-col items-center gap-4">
                <div>
                  <img src={book.imageURL} alt={book.title} className="w-20 h-30 object-cover rounded-md" />
                </div>
                <button onClick={() => onRemove(book._id)} className="text-red-500">
                  &times;
                </button>
              </li>
            ))
          ) : (
            <li className="p-4">Your cart is empty</li>
          )}
        </ul>
      </div>
      <div className="p-4">
        <button onClick={handleCheckout} className="w-full bg-blue-700 text-white py-2 rounded">
          Checkout
        </button>
      </div>
    </div>
  );
};

// Prop type validation
CartSidebar.propTypes = {
  cart: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartSidebar;
