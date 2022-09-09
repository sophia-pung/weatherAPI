import React, { Component } from 'react';
import './WelcomePage.css'; // Tell webpack that Button.js uses these styles
import AdventureClick from './components/AdventureClick';

const WelcomePage = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <h2>Hello world</h2>
        console.log("Adventure");
        <AdventureClick />
        console.log("Run");
      </div>
    </div>
  );
};

export default WelcomePage;
