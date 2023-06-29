import React from 'react';
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
function Experience() {
    return (
        <section className="bg-dark flex justify-center items-center p-3">
            <h2 className="gradient-text font-bold text-5xl -rotate-90">Experiencia</h2>
            <div className="flex flex-col">
                {arr.map((item) => (
                    <a key={item.id} className='relative m-10 hover:scale-105 transition-transform duration-300'>
                        <img src="https://placehold.co/600x400" alt="proyecto1" className='w-80'/>
                        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/[0.9] opacity-0 hover:opacity-100 border border-light'>
                            <h3 className='text-2xl text-light'>Proyecto</h3>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
};

export default Experience;