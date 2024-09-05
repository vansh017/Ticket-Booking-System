// src/pages/HomePage.js
import React from 'react';
import './Home.css'; // Import the CSS file
import MyCard from '../components/Card'; // Remove .js extension



// src/data.js
export const items = [
  {
    title: "Card 1",
    description: "This is the first card.",
    image: "https://via.placeholder.com/200x200",
  },
  {
    title: "Card 2",
    description: "This is the second card.",
    image: "https://via.placeholder.com/200x200",
  },
  {
    title: "Card 3",
    description: "This is the third card.",
    image: "https://via.placeholder.com/200x200",
  },
  {
    title: "Card 4",
    description: "This is the fourth card.",
    image: "https://via.placeholder.com/200x200",
  },
  {
    title: "Card 5",
    description: "This is the fifth card.",
    image: "https://via.placeholder.com/200x200",
  },
];


const HomePage = () => {
  return (
    <div className="home-page">
    <div className="card-container">
        {items.map((item, index) => (
          <MyCard 
            key={index} 
            title={item.title} 
            description={item.description} 
            img={item.image} 
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

