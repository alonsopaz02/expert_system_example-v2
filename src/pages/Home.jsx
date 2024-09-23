import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Cambiar useHistory por useNavigate
import '../stylesheets/Home.css';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import imghemo from '../assets/imghemo.png';
import { personas } from '../utils/personas'; // Importa el objeto personas

function Home() {
  const [inputName, setInputName] = useState('');
  const navigate = useNavigate(); // Reemplazo de useHistory por useNavigate

  const handleCustomConsultClick = () => {
    // Navegar a la página de CustomConsult
    navigate('/form');
  };

  const handleButtonClick = () => {
    const nameLowerCase = inputName.toLowerCase();

    // Verifica si el nombre existe en la base de datos de personas
    if (personas[nameLowerCase]) {
      // Navegar a ExpertSystem2 pasando el nombre como parámetro
      navigate(`/expertsystem?name=${inputName}`);
    } else {
      // Mostrar alerta si el nombre no está en las reglas
      alert("El nombre ingresado no se encuentra en la base de datos.");
    }
  };

  return (
    <div className="home-container">
      <Header />
      <div className="main-container">
        <div className="title-container">GenDiag - Diagnóstico de Enfermedades</div>
        <div className="descripcion-container">
          <div className="descripcion">
            Sistema inteligente de detección de diferentes enfermedades genéticas. Solo ingresa para poder obtener una consulta personalizada.
          </div>
          <div className="boton-container">
            <CustomButton
              placeholderText="Consulta personalizada"
              buttonText="➡️"
              onClick={handleCustomConsultClick} // Redirigir a la página de CustomConsult
            />
          </div>
        </div>
      </div>
      <div className="img-container">
        <div className="img-header">
          <div className="x-icon">X</div>
        </div>
        <img src={imghemo} alt="Hemofilia" className="img-content" />
      </div>
    </div>
  );
}

export default Home;
