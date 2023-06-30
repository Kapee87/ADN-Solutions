import React from 'react';
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
function Experience() {
    return (
        <section id="experiencia" className="bg-dark flex flex-col lg:flex-row justify-center items-center px-3 py-5 min-w-full min-h-screen">
            <h2 className="gradient-text font-bold text-5xl mb-4 lg:mb-0 lg:-rotate-90">Experiencia</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {arr.map((_,item) => (
                    <a key={item} className='relative hover:scale-105 transition-transform duration-300'>
                        <img src="https://placehold.co/600x400" alt="proyecto1" className='w-72 h-48 object-cover'/>
                        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/[0.9] opacity-0 hover:opacity-100 border border-light'>
                            <h3 className='text-2xl text-light font-primary font-bold'>Proyecto</h3>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
};

export default Experience;