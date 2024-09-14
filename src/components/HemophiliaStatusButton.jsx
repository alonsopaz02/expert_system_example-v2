import React from 'react';
import '../components-styles/HemophiliaStatusButton.css';
const HemophiliaStatusButton = ({ label }) => {
  return (
    <div className="status-button">
      <span className="button-label">{label}</span>
      <div className="arrow-container">
        <span className="arrow">&#10145;</span> {/* Flecha derecha */}
      </div>
    </div>
  );
};

export default HemophiliaStatusButton;