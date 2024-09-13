// src/EventDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import { items } from "../data";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./EventDetails.css";
import { useNavigate } from "react-router-dom";

const EventDetails = () => {
  const navigate = useNavigate();

  const handleButtonClick = (index) => {
    navigate(`/book-ticket/${index}/select-location`);
  };
  const { id } = useParams(); // Get the event ID from the URL
  const event = items[id]; // Find the corresponding event

  if (!event) {
    return <Typography variant="h6">Event not found!</Typography>;
  }

  return (
    <Card className="event-details">
      <Grid container spacing={2}>
        {/* Image on the Left */}
        <Grid item className="event-details-image-container">
          <CardMedia
            className="event-details-image"
            component="img"
            height="100%"
            image={event.image}
            alt={event.title}
            sx={{ objectFit: "fill", height: "100%", width: "100%" }}
          />
        </Grid>

        {/* Description on the Right */}
        <Grid item className="event-details-image-container">
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              {event.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              {event.description}
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                <strong>Duration:</strong> {event.duration}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Language:</strong> {event.language}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Type:</strong> {event.type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Venue:</strong> {event.venue}
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleButtonClick(id)}
            >
              Book Now
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default EventDetails;
