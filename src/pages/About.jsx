import React from 'react';
import '../stylesheets/About.css';
import Header from '../components/Header'; // Ajusta la ruta según la ubicación de tu archivo About.jsx
import hemofilia from '../assets/hemofilia.png'; // Ajusta la ruta según la ubicación de tu imagen
import tratamiento from '../assets/tratamiento.jpg'; // Ajusta la ruta según la ubicación de tu imagen
import monitoreo from '../assets/monitoreo.jpg'; // Ajusta la ruta según la ubicación de tu imagen

function About() {  

  return (
    <div className="about-container">
      <Header />
      <div className="about-section">
        <h3>¿Qué es la hemofilia? <span className="icon">⬇</span></h3>
        <p>Trastorno genético que afecta la capacidad de la sangre para coagularse adecuadamente.</p>
        <ul>
          <li><b>Gen sano:</b> Las personas sanas producen los factores de coagulación en cantidades normales.</li>
          <li><b>Gen hemofílico:</b> Las personas hemofílicas tienen una deficiencia de uno de los factores de coagulación esenciales.</li>
          <li><b>Gen portador:</b> Los portadores del gen de la hemofilia tienen un gen sano y un gen defectuoso.</li>
        </ul>
        <img src={hemofilia} />
      </div>
      <div className="about-section">
        <h3>Tratamiento <span className="icon">⬇</span></h3>
        <ul>
          <li><b>Terapia de Reemplazo:</b> Se administra el factor de coagulación faltante a través de inyecciones intravenosas.
          Esto ayuda a prevenir o controlar episodios de sangrado.</li>
          <li><b>Medicamentos:</b> Para aumentar la producción de factores de coagulación.</li>
          <li><b>Cuidado Integral:</b> Involucra la gestión de la hemofilia y monitoreo regular para ajustar el tratamiento
          según sea necesario.</li>
        </ul>
        <img src={tratamiento}/>
      </div>
      <div className="about-section">
        <h3>Mitigación de efectos <span className="icon">⬇</span></h3>
        <ul>
          <li><b>Tratamiento Proactivo:</b> Seguir el plan de tratamiento prescrito para mantener niveles adecuados de factores de coagulación.</li>
          <li><b>Monitoreo Regular:</b> Realizar chequeos periódicos con un especialista.</li>
          <li><b>Educación y Precauciones:</b> Aprender a manejar lesiones y hemorragias menores de manera adecuada, y evitar actividades 
          que puedan causarlas.</li>
        </ul>
        <img src={monitoreo}/>
      </div>
    </div>
  );
}

export default About;