import React from 'react';
import '../components-styles/CustomComboBox.css'; // Importa el archivo CSS para los estilos

const CustomComboBox = ({ options, selectedOption, onChange }) => {
  return (
    <div className="custom-combobox">
      <select value={selectedOption} onChange={onChange} className="select-box">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomComboBox;
