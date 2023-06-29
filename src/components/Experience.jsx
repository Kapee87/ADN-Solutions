import React from 'react';
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
function Experience() {
    return (
        <section className="bg-dark flex justify-center items-center p-3">
            <h2 className="gradient-text font-bold text-4xl">Experiencia</h2>
            <div>
                {arr.map((item) => (
                    <a key={item.id}>
                        <img src="https://placehold.co/600x400" alt="proyecto1" />
                        <div>
                            <h3>Proyecto</h3>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
};

export default Experience;