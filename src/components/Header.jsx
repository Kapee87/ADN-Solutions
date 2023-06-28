import React from 'react';
import logo from '../assets/logo-ico.png';

function Header() {
    return (
        <header className='bg-dark'>
            <nav className='flex justify-between w-full top-0 left-0 py-4 px-6 items-center bg-dark'>
                <a href="#"><img src={logo} alt="logo" /></a>
                <input type="checkbox" id="menu-toggle" />
                <label htmlFor="menu-toggle" className="">&#9776;</label>
                <ul className='text-light block [&>li]:inline [&>li]:mx-4 [&>li]:bg-clip-text'>
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