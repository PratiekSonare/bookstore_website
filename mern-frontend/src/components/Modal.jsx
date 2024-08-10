import React from 'react';
import './test.css'; // Optional: Create a CSS file for custom styling

const Modal = ({ isVisible, onClose, onConfirm }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Confirm Purchase</h2>
        <p>Are you sure you want to confirm the purchase?</p>
        <div className="modal-actions">
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition" onClick={onConfirm}>Confirm</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
