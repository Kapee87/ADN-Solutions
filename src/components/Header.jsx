import React from 'react';

function Header() {
    return (
        <header>
            <nav>
                <a href="#"><img src="./assets/logo-ico.png" alt="logo" /></a>
                <input type="checkbox" id="menu-toggle" />
                <label htmlFor="menu-toggle" className="">&#9776;</label>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#soluciones">Soluciones</a></li>
                    <li><a href="#experiencia">Experiencia</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#contactanos">Contactános</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;