import React, { useState } from 'react';
import logo from '../assets/logo-ico.png';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const burgerLine = `w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

    return (
        <header className="bg-dark">
            <nav className="flex justify-between w-full fixed top-0 left-0 py-1 px-1 items-center bg-dark">
                <a href="#" ><img src={logo} alt="logo" className="h-12" /></a>
                <ul className="space-x-2 md:space-x-4 md:mr-2 text-light [&>li]:inline md:[&>li>a]:font-bold">
                    <li><a href="#inicio" className='text-light gradient-text-hover'>Inicio</a></li>
                    <li><a href="#soluciones" className='text-light gradient-text-hover'>Soluciones</a></li>
                    <li><a href="#experiencia" className='text-light gradient-text-hover'>Experiencia</a></li>
                    <li><a href="#team" className='text-light gradient-text-hover'>Team</a></li>
                    <li><a href="#contactanos" className='text-light gradient-text-hover'>Contactános</a></li>
                </ul>
                <button
                    className="h-10 w-10 border-2 border-light rounded flex flex-col justify-center items-center group bg-light"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div
                        className={`${burgerLine} ${isOpen
                            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                            : "opacity-50 group-hover:opacity-100"
                            }`}
                    />
                    <div className={`${burgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`}
                    />
                    <div
                        className={`${burgerLine} ${isOpen
                            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                            : "opacity-50 group-hover:opacity-100"
                            }`}
                    />
                </button>
            </nav>
        </header>
    );
}

export default Header;
