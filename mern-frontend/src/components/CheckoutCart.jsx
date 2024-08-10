import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Modal from './Modal';
import { useCart } from './CartContext';

const CheckoutPage = () => {
  const { cart, setCart } = useCart();
  const location = useLocation();
  const [isModalVisible, setModalVisible] = React.useState(false);

  React.useEffect(() => {
    setCart(location.state?.cartItems || []);
  }, [location.state?.cartItems, setCart]);

  const handleConfirmClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleConfirmPurchase = () => {
    setModalVisible(false);
    console.log('Purchase confirmed');
  };

  const removeFromCart = (bookId) => {
    setCart(prevCart => prevCart.filter(book => book._id !== bookId));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className='font-bold text-5xl text-center mb-6 poppins-bold'>Checkout</h1>
      <div className='flex flex-col items-center'>
        {cart.length === 0 ? (
          <p className="text-lg">Your cart is empty.</p>
        ) : (
          <div className="w-full max-w-2xl">
            <h2 className="text-2xl poppins-thin mb-4">Items in your cart:</h2>
            <div className="overflow-y-auto max-h-80 border-2 border-gray-500 p-4 rounded-lg">
              <ul className="space-y-4">
                {cart.map((item, index) => (
                  <li key={index} className="flex items-center justify-between border-b py-4">
                    <img src={item.imageURL} alt={item.title} className="w-20 h-32 object-cover mr-4 rounded-xl" />
                    <div className="flex-1 block">
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <p className="text-green-600 hover:font-bold transition-all ease-in duration-100">Availability: {item.availability}</p>
                    </div>
                    <button onClick={() => removeFromCart(item._id)} className="text-red-500" style={{fontSize: '24px'}}>
                      &times;
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex justify-between">
              <Link to="/shop">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Back to Shop</button>
              </Link>
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition" onClick={handleConfirmClick}>Confirm purchase?</button>
            </div>
          </div>
        )}
      </div>
      <Modal isVisible={isModalVisible} onClose={handleCloseModal} onConfirm={handleConfirmPurchase} />
    </div>
  );
};

export default CheckoutPage;
