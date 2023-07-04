import debbiWeb from '../assets/projectsImg/debbiWeb.gif'
import arielWeb from '../assets/projectsImg/arielWeb.gif'
import francoWeb from '../assets/projectsImg/francoWeb.gif'
import kapeeWeb from '../assets/projectsImg/kapeeWeb.gif'
import lucaWeb from '../assets/projectsImg/lucaWeb.gif'
import marcosWeb from '../assets/projectsImg/marcosWeb.gif'

import arielStatic from '../assets/projectsImg/arielStatic.avif'
import debbiStatic from '../assets/projectsImg/debbiStatic.avif'
import marcosStatic from '../assets/projectsImg/marcosStatic.avif'
import francoStatic from '../assets/projectsImg/francoStatic.avif'
import lucaStatic from '../assets/projectsImg/lucaStatic.avif'
import kapeeStatic from '../assets/projectsImg/kapeeStatic.avif'

const proyectsMock = [
    {
        id: crypto.randomUUID(),
        url: 'https://debiabril.github.io/portfolio/',
        img: debbiStatic,
        gif: debbiWeb,
        project: "Portfolio de Debii"
    },
    {
        id: crypto.randomUUID(),
        url: 'https://mockup-portfolio-hardcoded-ooi0e023a-ariellevita.vercel.app',
        img: arielStatic,
        gif: arielWeb,
        project: "Portfolio de Ariel"
    },
    {
        id: crypto.randomUUID(),
        url: 'https://marcoscakin.github.io/amazingEvents_Maidana/',
        img: marcosStatic,
        gif: marcosWeb,
        project: "Proyecto de Marcos"
    },
    {
        id: crypto.randomUUID(),
        url: 'https://tsuramii.github.io/ADN-Solutions-Mockup/',
        img: lucaStatic,
        gif: lucaWeb,
        project: "Proyecto de Luca"
    },
    {
        id: crypto.randomUUID(),
        url: 'http://www.franco-miguez.com',
        img: francoStatic,
        gif: francoWeb,
        project: "Portfolio de Franco"
    },
    {
        id: crypto.randomUUID(),
        url: 'https://kapee87.github.io/Barberia-Alura/',
        img: kapeeStatic,
        gif: kapeeWeb,
        project: "Proyecto de Kapee"
    },
    
]

export default proyectsMock;