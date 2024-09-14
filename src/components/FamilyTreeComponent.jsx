import React from 'react';
import '../components-styles/FamilyTreeComponent.css'; // Importa el archivo CSS para los estilos
import PersonCard from '../components/PersonCard'; // Componente para cada persona

const FamilyTreeComponent = () => {
  return (
    <div className="family-tree">
      <div className="tree-row">
        <PersonCard name="Tesla" gender="female" />
        <PersonCard name="Nicolas" gender="male" />
      </div>
       {/* Líneas entre padres e hijo */}
       <div className="tree-connector connector-parents"></div>

      <div className="tree-row">
        <PersonCard name="Isabel" gender="male" central />
        <PersonCard name="Okibaisa" gender="male" />
      </div>

       {/* Líneas entre Isabel y sus hijos */}
       <div className="tree-connector connector-children"></div>
       
      <div className="tree-row">
        <PersonCard name="Joaquin" gender="male" />
        <PersonCard name="Darwin" gender="male" />
      </div>
    </div>
  );
};

export default FamilyTreeComponent;