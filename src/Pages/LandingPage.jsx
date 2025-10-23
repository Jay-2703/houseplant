
import React from 'react';
import Header from '../components/Header'; 

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <div className="container landing-content">
        <h1 className="landing-h1">Welcome to GreenHouse</h1>
        <p className="landing-p">
          Discover a world of beautiful houseplants to transform your space. From low-maintenance succulents to dramatic monstera deliciosas, we have the perfect plant for every home and lifestyle. Bring nature indoors and create your personal oasis.
        </p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '#products';
          }}
          className="btn-primary"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}