// src/Card.js
import React from "react";
import Button from "@mui/material/Button";
import "./BookTicketFooter.css"; // Import the CSS file for styling

const BookTicketFooter = ({ title, description, img }) => {
  return (
    <div className="bottom-div">
      <div className="bottom-button">
        <Button variant="contained" color="primary">
          Back
        </Button>
      </div>
      <div className="bottom-button">
        <Button variant="contained" color="primary">
          Next
        </Button>
      </div>
    </div>
  );
};

export default BookTicketFooter;
