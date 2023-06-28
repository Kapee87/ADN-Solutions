import React from 'react';
import logo from '../assets/logo-ico.png';

function Header() {
    // TODO: Hamburguer menu
    return (
        <header className="bg-dark">
            <nav className="flex justify-between w-full fixed top-0 left-0 py-1 px-1 items-center bg-dark">
                <a href="#"><img src={logo} alt="logo" className="h-12" /></a>
                <ul className="space-x-2 md:space-x-4 md:mr-2 text-light [&>li]:inline md:[&>li>a]:font-bold">
                    <li><a href="#inicio" className='text-light gradient-text-hover'>Inicio</a></li>
                    <li><a href="#soluciones" className='text-light gradient-text-hover'>Soluciones</a></li>
                    <li><a href="#experiencia" className='text-light gradient-text-hover'>Experiencia</a></li>
                    <li><a href="#team" className='text-light gradient-text-hover'>Team</a></li>
                    <li><a href="#contactanos" className='text-light gradient-text-hover'>Contactános</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
