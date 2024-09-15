import React from 'react';
import '../components-styles/FamilyTreeComponent.css';
import PersonCard from '../components/PersonCard';
import { personas } from '../utils/personas'; // Asegúrate de ajustar la ruta si es necesario
import { estadoHemofilia } from '../utils/reglas'; // Asegúrate de ajustar la ruta si es necesario

const FamilyTreeComponent = ({ progenitores, persona, pareja, descendientes }) => {
  // Descomponer los progenitores, pareja y descendientes en variables individuales
  const [progenitor1, progenitor2] = progenitores;
  const [descendiente1, descendiente2] = descendientes;

  // Función para obtener el estado de hemofilia y formatear el nombre
  const obtenerNombreConEstado = (nombre) => {
    const personaEncontrada = personas[nombre.toLowerCase()];
    if (!personaEncontrada) return "No registrado";

    const estado = estadoHemofilia(personaEncontrada);
    const estadoAbreviado = estado === 'enfermo' ? 'E' : estado === 'portador' ? 'P' : 'S'; // E = Enfermo, P = Portador, S = Sano
    return `${nombre} (${estadoAbreviado})`;
  };

  return (
    <div className="family-tree">
      {/* Progenitores */}
      <div className="tree-row">
        <PersonCard 
          name={progenitor1?.nombre ? obtenerNombreConEstado(progenitor1.nombre) : "No registrado"} 
          gender={progenitor1 ? progenitor1.genero : "mujer"} 
        />
        <PersonCard 
          name={progenitor2?.nombre ? obtenerNombreConEstado(progenitor2.nombre) : "No registrado"} 
          gender={progenitor2 ? progenitor2.genero : "varon"} 
        />
      </div>

      {/* Conector entre padres e hijos */}
      <div className="tree-connector connector-parents"></div>

      {/* Persona central y su pareja */}
      <div className="tree-row">
        <PersonCard 
          name={persona?.nombre ? obtenerNombreConEstado(persona.nombre) : "No registrado"} 
          gender={persona ? persona.genero : "varon"} 
          central 
        />
        <PersonCard 
          name={pareja?.nombre ? obtenerNombreConEstado(pareja.nombre) : "No registrada"} 
          gender={pareja ? pareja.genero : "mujer"} 
        />
      </div>

      {/* Conector entre la persona central y sus hijos */}
      <div className="tree-connector connector-children"></div>

      {/* Descendientes */}
      <div className="tree-row">
        <PersonCard 
          name={descendiente1?.nombre ? obtenerNombreConEstado(descendiente1.nombre) : "No registrado"} 
          gender={descendiente1 ? descendiente1.genero : "varon"} 
        />
        <PersonCard 
          name={descendiente2?.nombre ? obtenerNombreConEstado(descendiente2.nombre) : "No registrado"} 
          gender={descendiente2 ? descendiente2.genero : "varon"} 
        />
      </div>
    </div>
  );
};

export default FamilyTreeComponent;
