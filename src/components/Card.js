// src/Card.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import './Card.css'; // Import the CSS file for styling

const MyCard = ({title, description, img}) => {
  return (
    <Card className="my-card">
      <CardMedia
        component="img"
        height="200"
        width="200"
        image={img}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className="custom-button">
          Share
        </Button>
        <Button size="small" className="custom-button">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default MyCard;
