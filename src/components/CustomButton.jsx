import React from 'react';
import '../stylesheets/CustomButton.css'; // Importa el archivo CSS para los estilos

const CustomButton = ({ placeholderText, buttonText, onClick }) => {
    return (
        <div className="custom-button-container">
            <input type="text" placeholder={placeholderText} className="custom-input" />
            <button className="custom-button" onClick={onClick}>
                {buttonText}
            </button>
        </div>
    );
};

export default CustomButton;