import { motion } from "framer-motion";
import React from 'react';

import { ComputersCanvas } from "../canvas";

const Hero = () => {
  return (
    <section className={` relative w-full lg:h-[100vh]  h-[55vh] flex justify-center items-center`}>
    <div className=" w-[650px] h-[500px] bg-custom1 opacity-5 rounded-full filter blur-xl absolute bottom-0  "></div>

    

      <ComputersCanvas />

      <div className='hidden lg:flex absolute xs:bottom-10 bottom-32 w-full  justify-center items-center'>
        <a href='#work'>
          <div className='w-[25px] h-[54px]  rounded-3xl border-3 border-gray-500 flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2.5 h-2.5 rounded-full bg-gray-500 mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
