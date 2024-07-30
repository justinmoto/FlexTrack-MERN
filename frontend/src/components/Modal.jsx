// Modal.js
import React from 'react';

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-white">
      <div className="bg-black p-10 rounded relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
