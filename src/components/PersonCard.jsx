import React from 'react';
import '../components-styles/PersonCard.css';

const PersonCard = ({ name, gender, central }) => {
  // Determinar si es "No registrado"
  const isNotRegistered = name === "No registrado";

  // Establecer icono e imagen de acuerdo con el estado
  const icon = isNotRegistered ? '❌' : gender === 'varon' ? '👨' : '👩';
  
  // Determinar el color de fondo en base al estado
  const backgroundClass = isNotRegistered ? 'not-registered' : gender;

  return (
    <div className={`person-card ${backgroundClass} ${central ? 'central' : ''}`}>
      <div className="person-icon">{icon}</div>
      <div className="person-name">{name}</div>
    </div>
  );
};

export default PersonCard;
