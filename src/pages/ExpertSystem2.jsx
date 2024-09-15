import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../stylesheets/ExpertSystem2.css';
import Header from '../components/Header';
import PersonCardComponent from '../components/PersonCardComponent';
import HemophiliaStatusButton from '../components/HemophiliaStatusButton';
import TextBoxComponent from '../components/TextBoxComponent';
import Footer from '../components/Footer';
import FamilyTreeComponent from '../components/FamilyTreeComponent';
import { personas } from '../utils/personas';  // Importa las personas
import { estadoHemofilia, encontrarPareja } from '../utils/reglas';  // Importa las reglas

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ExpertSystem2() {
  const [persona, setPersona] = useState(null);
  const [estadoHemofiliaPersona, setEstadoHemofiliaPersona] = useState('');
  const [progenitores, setProgenitores] = useState('');
  const [pareja, setPareja] = useState('');
  const [descendientes, setDescendientes] = useState('');
  
  const query = useQuery();
  const nombreSeleccionado = query.get("name").toLowerCase(); // Recibir el nombre pasado desde Home

  useEffect(() => {
    const personaSeleccionada = personas[nombreSeleccionado];
    setPersona(personaSeleccionada);

    // Obtener el estado de hemofilia
    const estado = estadoHemofilia(personaSeleccionada);
    setEstadoHemofiliaPersona(estado);

    // Obtener los progenitores
    const progenitoresLista = personaSeleccionada.progenitores.length > 0 
      ? personaSeleccionada.progenitores 
      : [{ nombre: "No registrado", genero: "male" }, { nombre: "No registrado", genero: "female" }];
    setProgenitores(progenitoresLista);

    // Obtener la pareja
    const parejaEncontrada = encontrarPareja(personaSeleccionada);
    setPareja(parejaEncontrada ? parejaEncontrada : { nombre: "No registrada", genero: "female" });

    // Obtener los descendientes (máximo 2)
    const descendientesLista = Object.values(personas)
      .filter(p => p.progenitores.includes(personaSeleccionada))
      .slice(0, 2);
    setDescendientes(descendientesLista.length > 0 ? descendientesLista : [{ nombre: "No registrado", genero: "male" }, { nombre: "No registrado", genero: "male" }]);
  }, []);

  return (
    <div className="exsystem-container">
      <Header />
      <div className="exsystem-info-container">
        <div className="exsystem-left">
          <div className='person-info1'>
            <div className='card-container'>
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
            {persona && (
              <>
                <TextBoxComponent content={`${estadoHemofiliaPersona}`} />
                <TextBoxComponent content={progenitores.map(p => p.nombre).join(', ')} />
                <TextBoxComponent content={pareja.nombre} />
                <TextBoxComponent content={descendientes.map(d => d.nombre).join(', ')} />
              </>
            )}
          </div>
        </div>
        <div className="exsystem-right">
          <div className="tree-container">
            <FamilyTreeComponent 
              progenitores={progenitores} 
              persona={persona} 
              pareja={pareja} 
              descendientes={descendientes} 
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ExpertSystem2;