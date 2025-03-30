
import React from 'react';
import { styles } from "../styles";

const Cta = () => {
  return (
    <section id='cta' className=" w-full lg:h-[15vh]  h-[45vh] md:h-[42vh] flex justify-end relative">
  <div className='w-[500px] h-[500px] absolute top-10 right-15'>
    {/* Conteúdo da div */}
  </div>

  <div className="  absolute inset-0 lg:top-[100px] sm:top-[90px] top-[120px] md:top-[160px] left-[6%] md:left-[10%] lg:left-[0%] lg:h-[70%] h-full lg:w-full w-[90%] md:w-[80%] flex justify-center flex-row items-start gap-5">
    {/* Conteúdo da div */}
  

        <div className='lg:absolute lg:left-[12vw] flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#3945ef] ' />
          <div className='w-1 h-90  lg:h-80 blue-gradient' />
        </div>

        <div >
          <h1 className={`text3d ${styles.ctaHeadText} md:h-[18vh] md:leading-tight `}>
            Olá, Eu sou <span className='text-[#3945ef]'>Lavinea Souza</span>
          </h1>
          <p className={`${styles.ctaSubText} mt-2 lg:max-w-[58vw]  text-white-100`}>
          Desenvolvedora Front-End e Web Designer, 
graduanda em Análise e Desenvolvimento de Sistemas, 
crio experiências digitais inovadoras e de alta qualidade.
          </p>
        </div>
      </div>
        
      
    </section>
  );
};

export default Cta;
