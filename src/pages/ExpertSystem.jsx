import React from 'react';
import '../stylesheets/ExpertSystem.css';
import Header from '../components/Header'; // Ajusta la ruta según la ubicación de tu archivo About.jsx

function ExpertSystem() {
  return (
    <div className="es-container">
      <Header />
      {/* Sección izquierda: Preguntas y Respuestas */}
      <div className="es-left">
        <div className="personal-info">
          <div className="profile-icon">👤</div>
          <h2>Isabel</h2>
        </div>
        <ul className="info-list">
          <li>
            <span className="question">Estado de Hemofilia</span> <span className="icon">➜</span>
            <span className="answer">Portador</span>
          </li>
          <li>
            <span className="question">Progenitores</span><span className="icon">➜</span>
            <span className="answer">Nicolas, Tesla</span>
          </li>
          <li>
            <span className="question">¿Heredó Hemofilia?</span><span className="icon">➜</span>
            <span className="answer">Sí</span>
          </li>
          <li>
            <span className="question">Descendientes</span><span className="icon">➜</span>
            <span className="answer">‘darwin’, ‘jesus’, ‘elena’, ‘juan’, ‘carolina’, ‘joaquin’, etc.</span>
          </li>
        </ul>
      </div>

      {/* Sección derecha: Árbol genealógico */}
      <div className="es-right">
        <h3>Árbol Genealógico</h3>
        <div className="tree-container">
          {/* Nivel 1: Padres de Isabel */}
          <div className="parent-container">
            <div className="parent">
              <span className="name">👤 Tesla</span>
            </div>
            <div className="parent">
              <span className="name">👤 Nicolas</span>
            </div>
          </div>

          {/* Nivel 2: Isabel */}
          <div className="child-container">
            <div className="child">
              <span className="name">👤 Isabel</span>
            </div>
          </div>

          {/* Nivel 3: Hijos de Isabel */}
          <div className="child-container">
            <div className="child">
              <span className="name">👤 Joaquín</span>
            </div>
            <div className="child">
              <span className="name">👤 Darwin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertSystem;