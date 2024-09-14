import React, { useState, useEffect } from 'react';
import '../stylesheets/ExpertSystem2.css';
import Header from '../components/Header';
import PersonCardComponent from '../components/PersonCardComponent';
import HemophiliaStatusButton from '../components/HemophiliaStatusButton';
import TextBoxComponent from '../components/TextBoxComponent';
import Footer from '../components/Footer';
import FamilyTreeComponent from '../components/FamilyTreeComponent';
import { personas } from '../utils/personas';  // Asegúrate de ajustar la ruta si está en otra carpeta
import { estadoHemofilia, encontrarPareja } from '../utils/reglas';  // Asegúrate de ajustar la ruta si está en otra carpeta

function ExpertSystem2() {
  const [persona, setPersona] = useState(null); // Estado para la persona seleccionada
  const [estadoHemofiliaPersona, setEstadoHemofiliaPersona] = useState(''); // Estado para guardar el estado de hemofilia
  const [progenitores, setProgenitores] = useState(''); // Estado para guardar los progenitores
  const [pareja, setPareja] = useState(''); // Estado para guardar la pareja
  const [descendientes, setDescendientes] = useState(''); // Estado para guardar los descendientes

  // Definir un nombre predeterminado para probar, más adelante puedes hacerlo dinámico
  const nombreSeleccionado = "anderson";

  // useEffect para cargar la persona cuando se monte el componente
  useEffect(() => {
    const personaSeleccionada = personas[nombreSeleccionado]; // Buscar la persona por nombre
    setPersona(personaSeleccionada);

    // Obtener el estado de hemofilia de la persona
    const estado = estadoHemofilia(personaSeleccionada);
    setEstadoHemofiliaPersona(estado);

    // Obtener los progenitores
    const progenitoresLista = personaSeleccionada.progenitores.length > 0 
      ? personaSeleccionada.progenitores.map(p => p.nombre).join(', ') 
      : "No registrados";
    setProgenitores(progenitoresLista);

    // Obtener la pareja
    const parejaEncontrada = encontrarPareja(personaSeleccionada);
    setPareja(parejaEncontrada ? parejaEncontrada.nombre : "No registrada");

    // Obtener los descendientes
    const descendientesLista = Object.values(personas)
      .filter(p => p.progenitores.includes(personaSeleccionada))
      .map(p => p.nombre)
      .join(', ');
      
    setDescendientes(descendientesLista.length > 0 ? descendientesLista : "No registrados");
  }, []);

  return (
    <div className="exsystem-container">
      <Header />
      <div className="exsystem-info-container">
        <div className="exsystem-left">
          <div className='person-info1'>
            <div className='card-container'>
              {/* Nombre de la persona */}
              <PersonCardComponent name={persona ? persona.nombre : "Cargando..."} />
            </div>
            <HemophiliaStatusButton label="Estado de Hemofilia" />
            <HemophiliaStatusButton label="Progenitores" />
            <HemophiliaStatusButton label="Pareja" />
            <HemophiliaStatusButton label="Descendientes" />
            <div className='info-container'>
              {/* Aquí podrías mostrar más información dinámica */}
            </div>
          </div>
          <div className='person-info2'>
            {/* Mostrar la información relevante de la persona */}
            {persona && (
              <>
                <TextBoxComponent content={`${estadoHemofiliaPersona}`} />
                <TextBoxComponent content={`${progenitores}`} />
                <TextBoxComponent content={`${pareja}`} />
                <TextBoxComponent content={`${descendientes}`} />
              </>
            )}
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
