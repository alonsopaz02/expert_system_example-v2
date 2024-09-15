import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ExpertSystem2 from './pages/ExpertSystem2';
import About from './pages/About';
import CustomConsult from './pages/CustomConsult';
import './App.css';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expertsystem" element={<ExpertSystem2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<CustomConsult />} />
      </Routes>
    </Router>
  );
}

export default App;
