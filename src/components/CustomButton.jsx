import React from 'react';
import '../stylesheets/CustomButton.css';

const CustomButton = ({ placeholderText, buttonText, onChange, onClick }) => {
    return (
        <div className="custom-button-container">
            <input 
              type="text" 
              placeholder={placeholderText} 
              className="custom-input" 
              onChange={onChange} // Permite capturar el texto del input
            />
            <button className="custom-button" onClick={onClick}>
                {buttonText}
            </button>
        </div>
    );
};

export default CustomButton;
