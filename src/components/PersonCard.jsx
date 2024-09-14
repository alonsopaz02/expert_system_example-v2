import React from 'react';
import '../components-styles/PersonCard.css';

const PersonCard = ({ name, gender, central }) => {
  return (
    <div className={`person-card ${gender} ${central ? 'central' : ''}`}>
      <div className="person-icon">{gender === 'male' ? '👨' : '👩'}</div>
      <div className="person-name">{name}</div>
    </div>
  );
};

export default PersonCard;
