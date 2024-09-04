// src/pages/HomePage.js
import React from 'react';
import './Home.css'; // Import the CSS file
import MyCard from '../components/Card'; // Remove .js extension

const HomePage = () => {
  return (
    <div className="home-page">
    <MyCard/>
    </div>
  );
};

export default HomePage;

