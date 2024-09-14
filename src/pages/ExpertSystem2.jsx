import React from 'react';
import '../stylesheets/ExpertSystem2.css';
import Header from '../components/Header'; // Ajusta la ruta según la ubicación de tu archivo Header.jsx
import PersonCardComponent from '../components/PersonCardComponent';
import HemophiliaStatusButton from '../components/HemophiliaStatusButton';
import TextBoxComponent from '../components/TextBoxComponent';
import Footer from '../components/Footer'; // Ajusta la ruta según la ubicación de tu archivo Footer.jsx
import FamilyTreeComponent from '../components/FamilyTreeComponent';


function ExpertSystem2() {
  return (
    <div className="exsystem-container">
      <Header />
      <div className="exsystem-info-container">
        <div className="exsystem-left">
          <div className='person-info1'>
            <div className='card-container'>
              <PersonCardComponent name="Isabel" />
            </div>
            <HemophiliaStatusButton label="Estado de Hemofilia" />
            <HemophiliaStatusButton label="Progenitores" />
            <HemophiliaStatusButton label="Pareja" />
            <HemophiliaStatusButton label="Descendientes" />
            <div className='info-container'>

            </div>

          </div>
          <div className='person-info2'>
            <TextBoxComponent content="Portador" />
            <TextBoxComponent content="Nicolas, Tesla" />
            <TextBoxComponent content="Alejandra" />
            <TextBoxComponent content="'darwin', 'jesus', 'elena', 'juan', 'carolina', 'joaquin', 'lizbeth', 'milagros', 'leo'" />
          </div>
        </div>
        <div className="exsystem-right">
          <div className="tree-container">
            <FamilyTreeComponent />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ExpertSystem2;