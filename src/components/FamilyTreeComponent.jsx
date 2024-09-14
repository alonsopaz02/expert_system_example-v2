import React from 'react';
import '../components-styles/FamilyTreeComponent.css';
import PersonCard from '../components/PersonCard';
import { personas } from '../utils/personas'; // Asegúrate de ajustar la ruta si es necesario

const FamilyTreeComponent = ({ progenitores, persona, pareja, descendientes }) => {
  // Descomponer los progenitores, pareja y descendientes en variables individuales
  const [progenitor1, progenitor2] = progenitores;
  const [descendiente1, descendiente2] = descendientes;

  // Función para obtener el género basado en el nombre
  const obtenerGenero = (nombre) => {
    const personaEncontrada = personas[nombre.toLowerCase()];
    return personaEncontrada ? personaEncontrada.genero : 'unknown';
  };

  return (
    <div className="family-tree">
      {/* Progenitores */}
      <div className="tree-row">
        <PersonCard 
          name={progenitor1?.nombre || "No registrado"} 
          gender={progenitor1 ? obtenerGenero(progenitor1.nombre) : "mujer"} 
        />
        <PersonCard 
          name={progenitor2?.nombre || "No registrado"} 
          gender={progenitor2 ? obtenerGenero(progenitor2.nombre) : "varon"} 
        />
      </div>

      {/* Conector entre padres e hijos */}
      <div className="tree-connector connector-parents"></div>

      {/* Persona central y su pareja */}
      <div className="tree-row">
        <PersonCard 
          name={persona?.nombre || "No registrado"} 
          gender={persona ? obtenerGenero(persona.nombre) : "varon"} 
          central 
        />
        <PersonCard 
          name={pareja?.nombre || "No registrada"} 
          gender={pareja ? obtenerGenero(pareja.nombre) : "mujer"} 
        />
      </div>

      {/* Conector entre la persona central y sus hijos */}
      <div className="tree-connector connector-children"></div>

      {/* Descendientes */}
      <div className="tree-row">
        <PersonCard 
          name={descendiente1?.nombre || "No registrado"} 
          gender={descendiente1 ? obtenerGenero(descendiente1.nombre) : "varon"} 
        />
        <PersonCard 
          name={descendiente2?.nombre || "No registrado"} 
          gender={descendiente2 ? obtenerGenero(descendiente2.nombre) : "varon"} 
        />
      </div>
    </div>
  );
};

export default FamilyTreeComponent;