import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css';

import { Pagination, Navigation } from 'swiper/modules';

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <motion.div className="w-full relative" variants={fadeIn("up", "spring", 0.5, 0.75)}>
      <div className="bg-tertiary p-5 h-[430px] rounded-2xl"> {/* Nova div envolvendo o Tilt */}
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="relative h-[230px]"
        >
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </Tilt>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            // Usando o índice no key para garantir unicidade
            <p key={`${name}-${tag.name}-${index}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="lg:w-[100vw] lg:h-[103vh] h-[120vh] md:h-[90vh] flex items-center justify-center">
      <section className=" lg:h-[105vh] h-[125vh] md:h-[90vh] w-[90vw] ml-[20px] flex flex-col px-4 py-8">
        <motion.div className="w-full md:h-[18vh] h-[16vh] " variants={textVariant()}>
          <p className={styles.sectionSubText}>Meu trabalho</p>
          <h2 className={styles.sectionHeadText}>Projetos.</h2>
        </motion.div>

        <div className="w-full flex lg:h-[0vh] h-[20vh] md:h-[5vh]">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-[#dfd9ff] lg:w-[60vw] mt-3 text-secondary text-[19px] lg:text-[23px] md:text-[25px] max-w-6xl leading-[30px] h-[8vh]"
          >
            A seguir, os projetos mostram minhas habilidades e experiência por meio de exemplos reais do meu trabalho. Cada projeto é brevemente descrito com links para repositórios de código e demos ao vivo.
          </motion.p>
        </div>

        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full"
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            580: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            820: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {projects.map((project, projectIndex) => (
            <SwiperSlide key={`${project.name}-${projectIndex}`}>
              <ProjectCard
                name={project.name}
                description={project.description}
                tags={project.tags}
                image={project.image}
                source_code_link={project.source_code_link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default SectionWrapper(Works, "work");
