import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../data";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import { Button, Typography } from "@mui/material";
import "./SelectLocation.css";
import BookTicket from "../components/BookTicket";
import BookTicketFooter from "../components/BookTicketFooter";

const SelectLocation = () => {
  const { id } = useParams();
  const event = items[id];
  const [selectedDivs, setSelectedDivs] = useState([]);

  console.log("selected divs", selectedDivs);

  const handleDivClick = (val) => {
    console.log("adsfsadfa", val);
    console.log("selected divs", selectedDivs);

    if (selectedDivs.includes(val)) {
      setSelectedDivs(selectedDivs.filter((i) => i !== val));
    } else {
      setSelectedDivs([...selectedDivs, val]);
    }
  };
  if (!event) {
    return <Typography variant="h6">Event not found!</Typography>;
  }

  return (
    <Card className="book-ticket-container">
      <Typography variant="h4">Select Location</Typography>
      <div className="location-selection-card-container">
        <table>
          <tr>
            {event["venue"].map((item, index) => (
              <p
                className={`location-selection-card ${
                  selectedDivs.includes(item) ? "selected" : ""
                }`}
                onClick={() => handleDivClick(item)}
              >
                {item}
                {selectedDivs.includes(item)}
              </p>
            ))}
          </tr>
        </table>
      </div>
      <BookTicketFooter />
    </Card>
  );
};

export default SelectLocation;
