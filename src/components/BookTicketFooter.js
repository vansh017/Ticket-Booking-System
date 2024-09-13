// src/Card.js
import React from "react";
import Button from "@mui/material/Button";
import "./BookTicketFooter.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";

const BookTicketFooter = ({ backPath, nextPath }) => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(`${backPath}`);
  };

  const handleNextButtonClick = () => {
    navigate(`${nextPath}`);
  };
  return (
    <div className="bottom-div">
      <div className="bottom-button">
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleBackButtonClick()}
        >
          Back
        </Button>
      </div>
      <div className="bottom-button">
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleNextButtonClick()}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default BookTicketFooter;
