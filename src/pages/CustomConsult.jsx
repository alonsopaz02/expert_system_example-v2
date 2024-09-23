import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuestionButton from '../components/QuestionButton';
import CustomComboBox from '../components/CustomComboBox';
import '../stylesheets/CustomConsult.css';

function CustomConsult() {
    const [answers, setAnswers] = useState({
        isMale: 'no',
        parentGeneticCarrier: 'no',
        recurrentRespiratoryIssues: 'no',
        familyHeartDiseaseHistory: 'no',
        muscleWeaknessIssues: 'no',
        familyCoagulationIssues: 'no',
        uncontrolledLimbMovements: 'no',
        brittleBonesHistory: 'no',
        immuneSystemIssues: 'no',
        visionOrHearingIssues: 'no',
    });

    const [diagnostico, setDiagnostico] = useState('');
    const [showAnswerBox, setShowAnswerBox] = useState(false);

    const handleChange = (key, value) => {
        setAnswers(prevState => ({
            ...prevState,
            [key]: value,
        }));
    };

    const handleSend = async (e) => {
        e.preventDefault();

        // Crear un nuevo objeto con las claves h1, h2, h3, etc.
        const mappedAnswers = {
            h1: answers.isMale,
            h2: answers.parentGeneticCarrier,
            h3: answers.recurrentRespiratoryIssues,
            h4: answers.familyHeartDiseaseHistory,
            h5: answers.muscleWeaknessIssues,
            h6: answers.familyCoagulationIssues,
            h7: answers.uncontrolledLimbMovements,
            h8: answers.brittleBonesHistory,
            h9: answers.immuneSystemIssues,
            h10: answers.visionOrHearingIssues,
        };

        try {
            // Enviar los datos al backend
            const response = await fetch('http://localhost:3000/diagnostico', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(mappedAnswers), // Convierte las respuestas mapeadas en JSON
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud al servidor');
            }

            const data = await response.json(); // Obtiene la respuesta del servidor
            setDiagnostico(data.diagnostico); // Actualiza el estado con el diagnóstico recibido
            setShowAnswerBox(true); // Mostrar el cuadro de respuesta
        } catch (error) {
            console.error('Error al enviar los datos:', error);
        }
    };

    return (
        <div className="cc-container">
            <Header />
            <div className='cc-all-container'>
                <div className='cc-left-container'>
                    <div className='qa-container'>
                        <QuestionButton question="¿Es usted hombre?" />
                        <CustomComboBox
                            options={['si', 'no']}
                            selectedOption={answers.isMale}
                            onChange={(e) => handleChange('isMale', e.target.value)}
                        />
                    </div>
                    <div className='qa-container'>
                        <QuestionButton question="¿Su madre o padre es portador de una enfermedad genética?" />
                        <CustomComboBox
                            options={['si', 'no']}
                            selectedOption={answers.parentGeneticCarrier}
                            onChange={(e) => handleChange('parentGeneticCarrier', e.target.value)}
                        />
                    </div>
                    <div className='qa-container'>
                        <QuestionButton question="¿Ha tenido problemas respiratorios recurrentes o infecciones pulmonares frecuentes?" />
                        <CustomComboBox
                            options={['si', 'no']}
                            selectedOption={answers.recurrentRespiratoryIssues}
                            onChange={(e) => handleChange('recurrentRespiratoryIssues', e.target.value)}
                        />
                    </div>
                    <div className='qa-container'>
                        <QuestionButton question="¿Tiene antecedentes familiares de enfermedades del corazón o vasos sanguíneos?" />
                        <CustomComboBox
                            options={['si', 'no']}
                            selectedOption={answers.familyHeartDiseaseHistory}
                            onChange={(e) => handleChange('familyHeartDiseaseHistory', e.target.value)}
                        />
                    </div>
                    <div className='qa-container'>
                        <QuestionButton question="¿Ha experimentado debilidad muscular o problemas de movimiento?" />
                        <CustomComboBox
                            options={['si', 'no']}
                            selectedOption={answers.muscleWeaknessIssues}
                            onChange={(e) => handleChange('muscleWeaknessIssues', e.target.value)}
                        />
                    </div>
                    <div className='qa-container'>
                        <QuestionButton question="¿Tiene antecedentes familiares de problemas de coagulación?" />
                        <CustomComboBox
                            options={['si', 'no']}
                            selectedOption={answers.familyCoagulationIssues}
                            onChange={(e) => handleChange('familyCoagulationIssues', e.target.value)}
                        />
                    </div>
                </div>

                <div className='cc-right-container'>
                    <div className='qa2-container'>
                        <QuestionButton question="¿Ha experimentado temblores o movimientos incontrolados en las extremidades?" />
                        <CustomComboBox
                            options={['si', 'no']}
                            selectedOption={answers.uncontrolledLimbMovements}
                            onChange={(e) => handleChange('uncontrolledLimbMovements', e.target.value)}
                        />
                    </div>
                    <div className='qa2-container'>
                        <QuestionButton question="¿Tiene antecedentes de huesos frágiles o quebradizos?" />
                        <CustomComboBox
                            options={['si', 'no']}
                            selectedOption={answers.brittleBonesHistory}
                            onChange={(e) => handleChange('brittleBonesHistory', e.target.value)}
                        />
                    </div>
                    <div className='qa2-container'>
                        <QuestionButton question="¿Ha tenido alguna enfermedad relacionada con el sistema inmunológico?" />
                        <CustomComboBox
                            options={['si', 'no']}
                            selectedOption={answers.immuneSystemIssues}
                            onChange={(e) => handleChange('immuneSystemIssues', e.target.value)}
                        />
                    </div>
                    <div className='qa2-container'>
                        <QuestionButton question="¿Ha tenido problemas de visión o audición desde el nacimiento?" />
                        <CustomComboBox
                            options={['si', 'no']}
                            selectedOption={answers.visionOrHearingIssues}
                            onChange={(e) => handleChange('visionOrHearingIssues', e.target.value)}
                        />
                    </div>

                    <div className='ans-container'>
                        <button className='send-button' onClick={handleSend}>
                            Enviar
                        </button>
                        {showAnswerBox && diagnostico && (
                            <div className='diagnostico-container'>
                                <h2>
                                    <span style={{ color: 'black' }}>Diagnóstico:</span>
                                    <span style={{ color: 'white' }}> {diagnostico}</span>
                                </h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CustomConsult;