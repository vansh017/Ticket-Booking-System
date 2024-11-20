import React, { useState, useEffect } from "react";
import BookTicketFooter from "../components/BookTicketFooter";
import { Typography } from "@mui/material";
import "./SelectPayment.css";
import { useParams } from "react-router-dom";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const SelectPayment = () => {
  const { id } = useParams();

  return (
    <div>
      <Typography variant="h4">Select Payment Method</Typography>
      <div className="price-selection-card-container">
        <table>
          <tr className="payment-card">Card</tr>
          <tr className="payment-card">UPI</tr>
        </table>
      </div>
      <BookTicketFooter
        backPath={`/book-ticket/${id}/select-location`}
        nextPath={`/book-ticket/0/select-price`}
      />
    </div>
  );
};

export default SelectPayment;
