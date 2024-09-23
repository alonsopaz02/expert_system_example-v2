import React from 'react';
import '../stylesheets/About.css';
import Header from '../components/Header'; // Ajusta la ruta según la ubicación de tu archivo About.jsx

function About() {  

  return (
    <div className="about-container">
      <Header />
      <div className="about-section">
        <h3>Hemofilia <span className="icon">⬇</span></h3>
        <p>La hemofilia es un trastorno genético que afecta la capacidad de la sangre para coagularse. Esto ocurre debido a la ausencia o insuficiencia de factores de coagulación esenciales, lo que provoca sangrados prolongados o espontáneos.</p>
      </div>
      <div className="about-section">
        <h3>Distrofia Muscular de Duchenne <span className="icon">⬇</span></h3>
        <p>Es una enfermedad genética que causa debilidad muscular progresiva. Afecta principalmente a niños y se debe a mutaciones en el gen que codifica la distrofina, una proteína esencial para la estabilidad de las células musculares.</p>
      </div>
      <div className="about-section">
        <h3>Síndrome de X Frágil <span className="icon">⬇</span></h3>
        <p>El síndrome de X frágil es un trastorno hereditario que provoca discapacidad intelectual, problemas de comportamiento y trastornos del desarrollo. Está causado por mutaciones en el gen FMR1, que afectan la producción de una proteína necesaria para el desarrollo cerebral.</p>
      </div>
      <div className="about-section">
        <h3>Fibrosis Quística <span className="icon">⬇</span></h3>
        <p>Es una enfermedad genética que afecta principalmente los pulmones y el sistema digestivo. Se caracteriza por la producción de moco espeso y pegajoso que puede obstruir los pulmones y los conductos pancreáticos, lo que lleva a infecciones respiratorias y problemas digestivos.</p>
      </div>
      <div className="about-section">
        <h3>Anemia Falciforme <span className="icon">⬇</span></h3>
        <p>Es un trastorno genético que afecta la forma y el comportamiento de los glóbulos rojos. En lugar de ser redondos, los glóbulos rojos tienen forma de media luna o hoz, lo que dificulta su paso a través de los vasos sanguíneos, provocando episodios de dolor y daño a órganos.</p>
      </div>
      <div className="about-section">
        <h3>Enfermedad de Tay-Sachs <span className="icon">⬇</span></h3>
        <p>Es una enfermedad neurodegenerativa hereditaria causada por la acumulación de gangliósidos en las células nerviosas del cerebro, lo que provoca deterioro mental y físico progresivo. Generalmente, los síntomas aparecen en los primeros meses de vida.</p>
      </div>
      <div className="about-section">
        <h3>Osteogénesis Imperfecta <span className="icon">⬇</span></h3>
        <p>Es un trastorno genético que afecta la formación de los huesos, provocando que sean extremadamente frágiles y se fracturen con facilidad. También puede afectar el tejido conectivo y causar problemas en los dientes, los ligamentos y la piel.</p>
      </div>
    </div>
  );
}

export default About;