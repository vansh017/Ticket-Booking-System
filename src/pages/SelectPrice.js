import React, { useState, useEffect } from "react";
import BookTicketFooter from "../components/BookTicketFooter";
import { Typography } from "@mui/material";
import "./SelectPrice.css";
import { useParams } from "react-router-dom";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const initialTicketTypes = [
  {
    id: 1,
    type: "Silver",
    price: 2,
    quantity: 0,
  },
  {
    id: 2,
    type: "Gold",
    price: 5,
    quantity: 0,
  },
  {
    id: 3,
    type: "Diamond",
    price: 10,
    quantity: 0,
  },
];

const SelectPrice = () => {
  const { id } = useParams();
  const [ticketTypes, setTicketTypes] = useState(initialTicketTypes);
  const [totalPrice, setTotalPrice] = useState(0);

  const incrementQuantity = (id) => {
    setTicketTypes((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === id ? { ...ticket, quantity: ticket.quantity + 1 } : ticket
      )
    );
  };

  // Decrement quantity
  const decrementQuantity = (id) => {
    setTicketTypes((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === id && ticket.quantity > 0
          ? { ...ticket, quantity: ticket.quantity - 1 }
          : ticket
      )
    );
  };

  useEffect(() => {
    console.log(ticketTypes);

    const total = ticketTypes.reduce(
      (sum, ticket) => sum + ticket.price * ticket.quantity,
      0
    );

    setTotalPrice(total);
  }, [ticketTypes]);

  return (
    <div className="select-price-container">
      <Typography variant="h4">Select Price</Typography>

      <div className="price-selection-card-wrapper">
        <div className="price-selection-card-container">
          <table>
            <tr>
              {ticketTypes.map((item) => (
                <div className="price-selection-card">
                  <div className="price-selection-card-content">
                    <p>Type : {item.type}</p>
                    <p>Price : ${item.price}</p>
                  </div>
                  <div className="price-selection-card-count">
                    <button onClick={() => decrementQuantity(item.id)}>
                      <RemoveRoundedIcon
                        fontSize="small"
                        className="rounded-btn"
                      />
                    </button>
                    {item["quantity"]}
                    <button onClick={() => incrementQuantity(item.id)}>
                      <AddRoundedIcon
                        fontSize="small"
                        className="rounded-btn"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </tr>
          </table>
        </div>
        <div className="price-selection-card-price">
          <p>Total Price : ${totalPrice}</p>
        </div>
      </div>

      <BookTicketFooter
        backPath={`/book-ticket/${id}/select-location`}
        nextPath={`/book-ticket/0/select-payment`}
      />
    </div>
  );
};

export default SelectPrice;
