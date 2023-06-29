import React from 'react';

const Banner = () => {
  return (
    <>
      <section id="inicio" className="
      min-w-full 
      min-h-full 
      w-screen
      h-screen
      relative flex 
      justify-center 
      items-center
      -z-10 
      ">
        <div className="outline-text adn  
        -z-10 
        absolute
        sm:text-10xl 
        text-transparent
        font-bold
        animate-[fadeIn_2s]
        ">
          ADN
        </div>
        <div className="
        banner
        ">
          <h1 className="
          animate-[slideInFromBottom_2s]
          bg-gradient-to-r 
          from-primary 
          to-secondary 
          bg-clip-text 
          text-transparent 
          font-bold 
          text-2xl 
          sm:text-3xl 
          md:text-4xl
          ">
            Tu futuro digital, bien construido.
          </h1>
        </div>
      </section>
    </>
  );
};

export default Banner;
