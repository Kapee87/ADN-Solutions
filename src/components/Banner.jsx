import React from 'react';

const Banner = () => {
  return (
    <>
      <section id="inicio" className="
      min-w-full 
      min-h-full 
      w-full
      h-screen
      relative flex 
      justify-center 
      items-center
      -z-10 
      ">
        <div className="outline-text
        -z-10 
        absolute
        text-9xl
        sm:text-[15rem]
        lg:text-[20rem]
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
          text-lg 
          sm:text-3xl 
          md:text-4xl
          lg:text-6xl
          ">
            Tu futuro digital, bien construido.
          </h1>
        </div>
      </section>
    </>
  );
};

export default Banner;
