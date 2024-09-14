import React from 'react';
import '../stylesheets/Home.css';
import Header from '../components/Header'; // Ajusta la ruta según la ubicación de tu archivo Header.jsx
import CustomButton from '../components/CustomButton';
import imghemo from '../assets/imghemo.png'; // Ajusta la ruta según la ubicación de tu imagen
import Footer from '../components/Footer'; // Ajusta la ruta según la ubicación de tu archivo Footer.jsx


function Home() {

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="home-container">
      <Header />
      <div className="main-container">
        <div className="title-container">
          Deteccion de Hemofilia
        </div>
        <div className="descripcion-container">
          <div className="descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam.
          </div>
          <div className="boton-container">
            <CustomButton
              placeholderText="Ingresa tu nombre"
              buttonText="➡️"
              onClick={handleButtonClick}
            />

            <CustomButton
              placeholderText="Consulta personalizada"
              buttonText="➡️"
              onClick={handleButtonClick}
            />
          </div>
        </div>
      </div>
      <div className="img-container">
        <div className="img-header">
          <div className="x-icon">
            X
          </div>
        </div>
        <img
          src={imghemo}  // Utiliza la imagen importada
          alt="Hemofilia" 
          className="img-content"
        />
      </div>
      <div className="description">
      </div>
      <Footer />
    </div>
  );
}

export default Home;