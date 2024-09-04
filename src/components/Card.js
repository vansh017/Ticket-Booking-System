// src/Card.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import './Card.css'; // Import the CSS file for styling

const MyCard = () => {
  return (
    <Card className="my-card">
      <CardMedia
        component="img"
        height="200"
        width="140"
        image="https://via.placeholder.com/140x200"
        alt="placeholder"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a sample card with some text content. You can use this space to describe something about the card.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default MyCard;
