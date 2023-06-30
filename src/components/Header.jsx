import React, { useState } from 'react';
import logo from '../assets/logo-ico.png';

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const burgerLine = `h-2 w-7 my-1 rounded-full bg-light transition ease transform duration-300`;
    const navLinkStyleDesktop = 'text-light gradient-text-hover'

    // TODO: Hamburguer menu
    return (
        <header className="bg-dark">
            <nav className="flex justify-between min-w-full fixed top-0 left-0 py-1 px-1 items-center bg-dark">
                <a href="#"><img src={logo} alt="logo" className="h-12" /></a>
                <ul className="space-x-2 md:space-x-4 md:mr-2 text-light [&>li]:inline md:[&>li>a]:font-bold hidden lg:inline-block ">
                    <li><a href="#inicio" className={navLinkStyleDesktop}>Inicio</a></li>
                    <li><a href="#soluciones" className={navLinkStyleDesktop}>Soluciones</a></li>
                    <li><a href="#experiencia" className={navLinkStyleDesktop}>Experiencia</a></li>
                    <li><a href="#team" className={navLinkStyleDesktop}>Team</a></li>
                    <li><a href="#contactanos" className={navLinkStyleDesktop}>Contactános</a></li>
                </ul>
                <button
                    className="h-10 w-10 rounded flex flex-col justify-center items-center group bg-dark lg:hidden "
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
                <div className={isOpen ? 'visible' : 'hidden'}>

                </div>
            </nav>
        </header>
    );
}

export default Header;
