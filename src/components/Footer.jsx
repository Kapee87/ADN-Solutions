import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope, faUsers } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/logo-ico.png';

export default function Footer() {
  return (
    <footer className="
    flex flex-col justify-center bg-dark text-light items-center border-t border-dotted border-light border-opacity-40
    md:flex-row 
    md:justify-around
    md:bg-dark 
    md:h-24 
    md:py-1 
    md:text-light
    snap-start
    ">
      <div className="
        flex flex-col items-center my-1 
        md:grid 
        md:justify-items-center 
        md:content-center 
        md:font-bold 
        md:w-4/12">
        <a className="text-center" href="#"><img src={logo} alt="logo" className="my-1 h-12" /></a>
        <h2 className="cursor-default">© 2023 | Todos los derechos reservados</h2>
      </div>
      <div className="
        text-4xl my-1 space-x-4 
        md:flex 
        md:items-center 
        md:justify-center 
        md:w-4/12 
        md:border-x 
        md:border-dotted 
        md:border-light 
        md:border-opacity-40">
        <a href="https://www.instagram.com/adnsolucionesweb/">
          <FontAwesomeIcon icon={faInstagram} className="hover:text-primary" />
        </a>
        <a href="https://github.com/ADNWebSolutions">
          <FontAwesomeIcon icon={faGithub} className="hover:text-secondary" />
        </a>
        <a href="mailto:adnsolutionsbusiness@gmail.com">
          <FontAwesomeIcon icon={faSquareEnvelope} className="hover:text-primary" />
        </a>
        <a href="#team">
          <FontAwesomeIcon icon={faUsers} className="text-3xl hover:text-secondary" />
        </a>
      </div>
      <div className="my-2
        md:flex 
        md:items-center 
        md:justify-center 
        md:w-4/12">
        <a className="hover:underline" href="">Terminos y condiciones</a>
      </div>
    </footer>
  );
}

