import React from "react";
import Card from "@mui/material/Card";
import "./BookTicket.css";
import { Outlet } from "react-router-dom";

const BookTicket = () => {
  return (
    <Card className="book-ticket-container">
      <Outlet />
    </Card>
  );
};

export default BookTicket;
