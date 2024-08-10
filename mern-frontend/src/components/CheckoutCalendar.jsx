import React, { useState, useEffect } from 'react';
import './test.css';
import { useCart } from './CartContext';

// Helper function to format dates
const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const CheckoutCalendar = () => {
  const { cart } = useCart();
  const [weeks, setWeeks] = useState(1);
  const chargePerWeek = 25; // Charge per week in rupees

  // Calculate the return date based on the number of weeks
  const calculateReturnDate = (weeks) => {
    const returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + weeks * 7);
    return returnDate;
  };

  // Handle change in dropdown
  const handleWeeksChange = (event) => {
    setWeeks(parseInt(event.target.value, 10));
  };

  const returnDate = calculateReturnDate(weeks);
  const totalCost = weeks * chargePerWeek * cart.length;

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold text-3xl text-center mb-6 poppins-bold">Lending Details</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg border-2 border-gray-400 h-auto">
        <label className="block mb-4">
          <span className="text-gray-700 poppins-thin">Select number of weeks:</span>
          <select
            value={weeks}
            onChange={handleWeeksChange}
            className="block w-full mt-1 px-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((week) => (
              <option key={week} value={week}>
                {week} week{week > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </label>
        <div className="mb-4">
          <p className="text-lg poppins-semibold">Return Date:</p>
          <p className="text-gray-600">{formatDate(returnDate)}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg poppins-semibold">Total Cost:</p>
          <p className="text-red-600 text-5xl roboto-condensed-thin hover:font-bold transition-all ease-in duration-100">₹{totalCost}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCalendar;
