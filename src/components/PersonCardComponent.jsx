import React from 'react';
import '../components-styles/PersonCardComponent.css';

const PersonCardComponent = ({ name }) => {
  return (
    <div className="person-card-main">
      <div className="icon">&#128100;</div>
      <div className="name">{name}</div>
      <div className="icon">&#128100;</div>
    </div>
  );
};

export default PersonCardComponent;