export default function Solutions() {

    return (
        <section id="soluciones"
            className={`
            text-light bg-dark h-screen w-full items-center justify-center flex flex-wrap 
            solutions-section-bg text-center

            [&>div]:w-40 [&>div]:basis-96 [&>div]:border [&>div]:p-10 [&>div]:mx-2 [&>div]:my-1 
            [&>div]:bg-dark [&>div]:font-default 

            [&>div>h3]:text-2xl [&>div>h3]:font-primary [&>div>h3]:mb-4 [&>div>h3]:font-bold

            [&>div>p]:font-bold
            `}>

            <div className="solucion">
                <h3 className="gradient-text">Diseño Web Responsivo</h3>
                <p>Nuestro equipo de diseñadores y desarrolladores creará un sitio web atractivo y funcional que se
                    adapte a diferentes dispositivos y tamaños de pantalla. Utilizamos las últimas tecnologías para
                    garantizar que tu sitio se vea y funcione de manera óptima en computadoras de escritorio, tabletas y
                    teléfonos móviles.</p>
            </div>
            <div className="solucion">
                <h3 className="gradient-text">Desarrollo de Aplicaciones Web</h3>
                <p>Ofrecemos desarrollo de aplicaciones web personalizadas, escalables y seguras para cumplir con tus
                    requisitos específicos. Ya sea interna para tu empresa o una plataforma en línea para tus clientes,
                    hacemos realidad tus proyectos.</p>
            </div>
            <div className="solucion">
                <h3 className="gradient-text">Optimización SEO</h3>
                <p>Nuestros expertos en SEO entienden la importancia de la visibilidad en línea. Podemos optimizar tu
                    sitio web para los motores de búsqueda, mejorando tu clasificación y atrayendo más tráfico orgánico.
                    Implementamos estrategias de SEO efectivas para destacarte entre la competencia.</p>
            </div>
        </section>
    )
}