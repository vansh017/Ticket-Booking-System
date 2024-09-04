// src/components/Button.js
import React from 'react';
import './Button.css'; // Import the CSS file

const Button = ({ children, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
