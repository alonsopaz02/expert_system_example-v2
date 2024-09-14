import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuestionButton from '../components/QuestionButton';
import CustomComboBox from '../components/CustomComboBox';
import '../stylesheets/CustomConsult.css';

function CustomConsult() {
    const [answers, setAnswers] = useState({
        gender: '-',
        motherCarrier: 'No',
        fatherHasHemophilia: 'No',
        grandparentsHemophilia: 'No',
        siblingsHemophilia: 'No',
        unclesHemophilia: 'No',
        cousinsHemophilia: 'No',
        excessiveBleeding: 'No',
        diagnosedCoagulationDisease: 'No',
    });

    const [showAnswerBox, setShowAnswerBox] = useState(false);
    const [diagnostico, setDiagnostico] = useState('');

    const handleChange = (key, value) => {
        setAnswers(prevState => ({
            ...prevState,
            [key]: value,
        }));
    };

    const handleSend = () => {
        const resultado = diagnosticarPersona(); // Generar el diagnóstico
        setDiagnostico(resultado); // Guardar el diagnóstico en el estado
        setShowAnswerBox(true); // Mostrar el cuadro de respuesta
    };

    const diagnosticarPersona = () => {
        let riesgoHemofilia = false;
        const nombre = "Usuario"; // O podrías usar un nombre ingresado por el usuario
    
        // Definir variables separadas para cada parte del diagnóstico
        let diagnosticoRiesgo = "";
        let diagnosticoSintomas = "";
        let diagnosticoFinal = "";
    
        // Lógica para hombres
        if (answers.gender === "M") {
            if (answers.motherCarrier === "Sí" || answers.fatherHasHemophilia === "Sí") {
                diagnosticoRiesgo = `${nombre} tiene un riesgo significativo de tener hemofilia. `;
                riesgoHemofilia = true;
            } else if (answers.grandparentsHemophilia === "Sí" || answers.siblingsHemophilia === "Sí") {
                diagnosticoRiesgo = `${nombre} tiene un riesgo moderado de tener hemofilia. `;
                riesgoHemofilia = true;
            } else if (answers.unclesHemophilia === "Sí" || answers.cousinsHemophilia === "Sí") {
                diagnosticoRiesgo = `${nombre} podría tener riesgo si algún otro pariente cercano es portador. `;
            } else {
                diagnosticoRiesgo = `${nombre} parece tener bajo riesgo de hemofilia. `;
            }
        }
    
        // Lógica para mujeres
        if (answers.gender === "F") {
            if (answers.motherCarrier === "Sí" || answers.fatherHasHemophilia === "Sí") {
                diagnosticoRiesgo = `${nombre} podría ser portadora de hemofilia o tener riesgo de hemofilia.`;
                riesgoHemofilia = true;
            } else if (answers.grandparentsHemophilia === "Sí" || answers.siblingsHemophilia === "Sí") {
                diagnosticoRiesgo = `${nombre} podría ser portadora si algún pariente cercano es afectado.`;
            } else if (answers.unclesHemophilia === "Sí" || answers.cousinsHemophilia === "Sí") {
                diagnosticoRiesgo = `${nombre} podría tener riesgo si su madre es portadora.`;
            } else {
                diagnosticoRiesgo = `${nombre} tiene bajo riesgo de ser portadora.`;
            }
        }
    
        // Evaluar si la persona tiene síntomas
        if (answers.excessiveBleeding === "Sí") {
            diagnosticoSintomas = `${nombre} tiene síntomas que podrían estar relacionados con problemas de coagulación.`;
            riesgoHemofilia = true;
        }
    
        if (answers.diagnosedCoagulationDisease === "Sí") {
            diagnosticoSintomas += `${nombre} tiene un diagnóstico previo de una enfermedad de la coagulación, lo que indica un alto riesgo.`;
            riesgoHemofilia = true;
        }
    
        // Conclusión final
        if (riesgoHemofilia) {
            diagnosticoFinal = `Conclusión: ${nombre} tiene riesgo de hemofilia.`;
        } else {
            diagnosticoFinal = `Conclusión: ${nombre} parece tener bajo riesgo de hemofilia.`;
        }
    
        // Juntar todas las partes del diagnóstico
        const resultadoFinal = `
            ${diagnosticoRiesgo}
            ${diagnosticoSintomas}
            ${diagnosticoFinal}
        `;
    
        return resultadoFinal.trim();
    };

    return (
        <div className="cc-container">
            <Header />
            <div className='cc-all-container'>
                <div className='cc-left-container'>
                    <div className='qa-container'>
                        <QuestionButton question="Indique su género (M/F)" />
                        <CustomComboBox
                            options={['M', 'F']}
                            selectedOption={answers.gender}
                            onChange={(e) => handleChange('gender', e.target.value)}
                        />
                    </div>
                    <div className='qa-container'>
                        <QuestionButton question="¿Su madre es portadora de hemofilia?" />
                        <CustomComboBox
                            options={['Sí', 'No']}
                            selectedOption={answers.motherCarrier}
                            onChange={(e) => handleChange('motherCarrier', e.target.value)}
                        />
                    </div>
                    <div className='qa-container'>
                        <QuestionButton question="¿Su padre tiene hemofilia?" />
                        <CustomComboBox
                            options={['Sí', 'No']}
                            selectedOption={answers.fatherHasHemophilia}
                            onChange={(e) => handleChange('fatherHasHemophilia', e.target.value)}
                        />
                    </div>
                    <div className='qa-container'>
                        <QuestionButton question="¿Tiene abuelos (padres de su madre o padre) con hemofilia?" />
                        <CustomComboBox
                            options={['Sí', 'No']}
                            selectedOption={answers.grandparentsHemophilia}
                            onChange={(e) => handleChange('grandparentsHemophilia', e.target.value)}
                        />
                    </div>
                    <div className='qa-container'>
                        <QuestionButton question="¿Algún hermano o hermana tiene hemofilia?" />
                        <CustomComboBox
                            options={['Sí', 'No']}
                            selectedOption={answers.siblingsHemophilia}
                            onChange={(e) => handleChange('siblingsHemophilia', e.target.value)}
                        />
                    </div>
                    <div className='qa-container'>
                        <QuestionButton question="¿Alguno de tus tíos (hermanos de tu madre) tiene hemofilia?" />
                        <CustomComboBox
                            options={['Sí', 'No']}
                            selectedOption={answers.unclesHemophilia}
                            onChange={(e) => handleChange('unclesHemophilia', e.target.value)}
                        />
                    </div>
                </div>

                <div className='cc-right-container'>
                    <div className='qa2-container'>
                        <QuestionButton question="¿Alguno de tus primos (hijos de tus tíos maternos) tiene hemofilia?" />
                        <CustomComboBox
                            options={['Sí', 'No']}
                            selectedOption={answers.cousinsHemophilia}
                            onChange={(e) => handleChange('cousinsHemophilia', e.target.value)}
                        />
                    </div>
                    <div className='qa2-container'>
                        <QuestionButton question="¿Has tenido problemas de sangrado excesivo o frecuente?" />
                        <CustomComboBox
                            options={['Sí', 'No']}
                            selectedOption={answers.excessiveBleeding}
                            onChange={(e) => handleChange('excessiveBleeding', e.target.value)}
                        />
                    </div>
                    <div className='qa2-container'>
                        <QuestionButton question="¿Te han diagnosticado una enfermedad relacionada a la coagulación?" />
                        <CustomComboBox
                            options={['Sí', 'No']}
                            selectedOption={answers.diagnosedCoagulationDisease}
                            onChange={(e) => handleChange('diagnosedCoagulationDisease', e.target.value)}
                        />
                    </div>

                    <div className='ans-container'>
                        {/* Botón de enviar */}
                        {!showAnswerBox && (
                            <button className='send-button' onClick={handleSend}>
                                Enviar
                            </button>
                        )}

                        {/* Cuadro de texto que aparece después de hacer clic en "Enviar" */}
                        {showAnswerBox && (
                            <textarea
                                className="response-box"
                                value={diagnostico}
                                readOnly
                            />
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CustomConsult;