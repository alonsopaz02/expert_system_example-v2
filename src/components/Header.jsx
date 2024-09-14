import React from 'react';
import '../components-styles/Header.css'; // Asegúrate de tener el archivo CSS en la ubicación correcta

function Header() {
    return (
        <header className="header-container">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="#">INICIO</a></li>
                    <li><a href="#">INFORMACIÓN EXTRA</a></li>
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