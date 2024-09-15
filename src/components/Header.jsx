import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link
import '../components-styles/Header.css'; // Asegúrate de tener el archivo CSS en la ubicación correcta

function Header() {
    return (
        <header className="header-container">
            <nav className="navbar">
                <ul className="nav-links">
                    {/* Usa el componente Link para redirigir a las rutas */}
                    <li><Link to="/">INICIO</Link></li>
                    <li><Link to="/about">INFORMACIÓN EXTRA</Link></li>
                </ul>
                <div className="search-bar">
                    <input type="text" placeholder="Buscar" />
                    <button className="search-button">🔍</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;