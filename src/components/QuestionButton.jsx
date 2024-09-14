import React from 'react';
import '../components-styles/QuestionButton.css';

const QuestionButton = ({ question }) => {
  return (
    <div className="question-button">
      <span className="question-text">{question}</span>
      <div className="arrow-container">
        <span className="arrow">&#10145;</span> {/* Flecha hacia la derecha */}
      </div>
    </div>
  );
};

export default QuestionButton;