import React from 'react';
import projectsMock from '../mocks/projectsMock'
import ImgBox from './microcomponents/imgBox';

function Experience() {
    return (
        <section
            id="experiencia"
            className="bg-dark flex flex-col lg:flex-row justify-center items-center px-3 py-5 min-w-full min-h-screen snap-start">
            <h2 className="gradient-text font-bold text-5xl mb-4 lg:mb-0 lg:-rotate-90">Experiencia</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {projectsMock.map(({ id, url, img, project, gif }) => (
                    < ImgBox key={id} img={img} url={url} project={project} gif={gif} />
                ))}
            </div>
        </section>
    )
};

export default Experience;