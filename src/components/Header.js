// src/components/Header.js
import React from 'react';
import { Moon, Sun, X } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'; // Import the CSS file for styles

const Header = () => {
  return (
    <header className="header">
          <h1 className="header-label">Event Ticket Booking</h1>
          <button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          </button>
    </header>
  );
};

export default Header;
