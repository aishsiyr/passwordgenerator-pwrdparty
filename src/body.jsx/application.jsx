import React from "react";
import PasswordGenerator from "./passwordform";
import logo from "./logo.png"; // Replace with the actual path to your logo image
import './body.css'
const Application = () => {
  const gradientStyle = {
    background: "linear-gradient(45deg, #41295a, #2F0743)",
    width: "100vw", // This sets the width to fill the entire screen horizontally
    height: "100vh", // This sets the height to fill the entire screen vertically
  };

  return (
    <nav className="text-white" style={gradientStyle}>
      <div className="container mx-auto flex justify-between items-center">
  <div className="text-3xl flex items-center space-x-2 p-10 font-lilita">
    <img src={logo} alt="Logo" className="h-10 w-10" />
    <span className="text-gradient">PwrdParty</span>
  </div>
  <div className="flex items-center space-x-2"></div>
</div>

      <PasswordGenerator />
    </nav>
  );
};

export default Application;
