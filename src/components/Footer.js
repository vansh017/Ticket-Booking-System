// src/Footer.js
import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';
import './Footer.css'; // Import CSS for additional styling if needed

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg" className="footer-container">
        <Box className="footer-logo">
          {/* Replace with your actual logo image */}
          <img src="/logo192.png" alt="Logo" className="footer-logo-img" />
        </Box>
        <Box className="footer-content">
          <Typography variant="h6">Contact Us</Typography>
          <Typography variant="body1">
            Email: <Link href="mailto:contact@example.com">contact@example.com</Link>
          </Typography>
          <Typography variant="body1">
            Phone: <Link href="tel:+1234567890">+1 (234) 567-890</Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
