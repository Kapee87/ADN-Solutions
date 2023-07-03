function Contact() {
    return(
        <section id="contactanos" className="flex justify-center min-h-screen pt-32">
            <form className="
            bg-dark text-light 
            w-3/4
            [&>label]:font-bold [&>label]:text-left [&>label]:pb-1
            [&>input]:mb-3 [&>select]:mb-3 [&>textarea]:mb-3
            [&>input]:p-2 [&>input]:bg-dark [&>input]:border
            [&>textarea]:p-2 [&>textarea]:bg-dark [&>textarea]:border
            [&>select]:p-2 [&>select]:bg-dark [&>select]:border
            [&>button]:p-2 [&>button]:bg-dark [&>button]:border
            border-light
            flex flex-col">
                <h1 className="text-3xl font-bold text-center">Tus clientes ya están en Internet, <span className="gradient-text">¿Y vos?</span></h1>
                <p className="text-center">No te quedes atrás sin presencia en línea. Creamos sitios web modernos y funcionales que se adaptan a
                    tus necesidades y atraen a tus clientes. </p>
                <label for="name">Nombre</label>
                <input type="text" id="name" name="name" placeholder="Ingrese su nombre completo" required />

                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Ingrese su dirección de correo electrónico"
                    required />

                <label for="servicio">Servicio de interés</label>
                <select id="servicio" className="w-1/2">
                    <option value="" disabled selected>Seleccione un servicio de interés</option>
                    <option value="Diseño de sitios web">Diseño de sitios web</option>
                    <option value="Desarrollo de aplicaciones web">Desarrollo de aplicaciones web</option>
                    <option value="Optimización de SEO">Optimización de SEO</option>
                </select>

                <label for="message">Mensaje</label>
                <textarea className="resize-y" id="message" name="message" rows="5"
                    placeholder="Cuéntenos sobre su proyecto o requerimientos" required></textarea>

                <button role="submit" className="inline-block cursor-pointer w-28">Enviar</button>
            </form>
        </section>
    )
}

export default Contact;