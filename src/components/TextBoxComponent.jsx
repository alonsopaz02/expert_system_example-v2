import React from 'react';
import '../components-styles/TextBoxComponent.css';

const TextBoxComponent = ({ content }) => {
  return (
    <div className="text-box">
      {content}
    </div>
  );
};

export default TextBoxComponent;