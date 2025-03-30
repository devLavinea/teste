import React from 'react';
import { motion } from "framer-motion"; // Importando o motion para animações
import Tilt from "react-parallax-tilt"; // Importação do motion
import { SectionWrapper } from "../hoc";
import { Swiper, SwiperSlide } from 'swiper/react';
import { styles } from "../styles";

import { fadeIn, textVariant } from "../utils/motion";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


// Dados dos cards
const cardData = [
 
  {
    id: 1,
    title: "Landing Pages",
    description: "Landing pages focadas em resultados, com design simples, CTAs atraentes e conteúdo persuasivo, sempre visando maximizar conversões e alcançar os objetivos do cliente.",
    buttonText: "Quero uma Landing Page"
  },
  {
    id: 2,
    title: "Desenvolvimento de sites",
    description: "Criação de sites personalizados, incluindo portfólios, sites institucionais, sites corporativos e outros projetos. Sempre atendendo às necessidades específicas de cada cliente.",
    buttonText: "Quero um Web Site"
  },
  {
    id: 3,
    title: "Web Designer",
    description: "Criação de designs personalizados e responsivos, focando na estética e funcionalidade. Meu objetivo é garantir uma experiência de usuário intuitiva e envolvente, com layouts que se adaptam a qualquer dispositivo.",
    buttonText: "Quero um Layout"
  },

 
];

const Services = () => {
 

  return (
    <>
    <div className="lg:w-[100vw] lg:h-[110vh] md:h-[105vh] h-[153vh] flex items-start justify-center">
    <section className=" lg:h-[100vh] md:h-[103vh] h-auto w-[90vw] ml-[20px] flex flex-col px-4 py-8">
      <motion.div className="  h-[17vh] md:h-[25vh]" variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}><br></br>Serviços.</h2>
        </motion.div>

        <div className="  w-full flex h-[50vh] md:h-[8vh] lg:h-[5vh]  ">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-[#dfd9ff] lg:w-[60vw] mt-3 text-secondary text-[19px] lg:text-[23px] md:text-[25px] max-w-6xl leading-[30px] "          >
          Crio landing pages otimizadas, com design responsivo e foco 
          em conversão. Desenvolvo portfólios personalizados, destacando
           projetos de forma criativa e profissional. Também crio soluções
            de e-commerce sem backend, utilizando tecnologias front-end,
             garantindo sites rápidos, funcionais e fáceis de gerenciar.  </motion.p>
        </div>
    
    <Swiper
    slidesPerView={'auto'}
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper "
    breakpoints={{
      // Quando a largura da tela for maior que 640px
      480: {
        slidesPerView: 1, // Exibir 1 slide por vez
        spaceBetween: 10, // Espaço de 10px entre os slides
      },
      580: {
        slidesPerView: 2, // Exibir 1 slide por vez
        spaceBetween: 10, // Espaço de 10px entre os slides
      },
      // Quando a largura da tela for maior que 768px
      900: {
        slidesPerView: 3, // Exibir 2 slides por vez
        spaceBetween: 20, // Espaço de 20px entre os slides
      },
     
    }}
  >
  {cardData.map((card) => (
    <SwiperSlide key={card.id}>
      <div className="swiper-slide">
        <Tilt
          options={{
            max: 45, // Inclinação máxima
            scale: 1, // Escala do efeito
            speed: 450, // Velocidade de animação
          }}
          className="bg-secondary  rounded-2xl  w-[320px] h-[420px] lg:h-[370px] lg:w-[305px]"
        >
          <motion.div
            className="swiper-card p-5 "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // Efeito de sombra no hover
            }}
          >
            <div className='h-full flex flex-col justify-around'>
            <h3 className='text-[20px] font-semibold'>{card.title}</h3>
            <p className='text-[18px] md:text-[19px] text-[#dfd9ff]'>{card.description}</p>
            <button className="div-3 btn-default">{card.buttonText}</button>
            </div>
          </motion.div>
        </Tilt>
      </div>
    </SwiperSlide>
  ))}
  </Swiper>
  </section>
  </div>
      
      </>
  );
};

// Exportando o componente About envolvido pelo SectionWrapper
export default SectionWrapper(Services, "services");
