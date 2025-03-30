import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { div } from "framer-motion/client";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-quaternary  rounded-3xl w-full xs:w-[320px] flex flex-col  '
  >
    <p className='text-white h-[5vh] div-3 font-black text-[45px]'>"</p>

    <div className='div-1   '>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 div-3  flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className=' bg-blue-900 rounded-2xl   '>@</span> {name}
          </p>
          <p className='mt-1 div-3 text-blue-900 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="lg:w-[100vw] lg:h-[110vh] h-[153vh] md:h-[90vh] flex items-start justify-center">
    <section className=" lg:h-[100vh] h-auto md:h-[98%] w-[90vw] ml-[20px] flex flex-col px-4 py-8">
      <div
        className={`  rounded-2xl ${styles.padding} lg:min-h-[200px] min-h-[110px]`}
      >
        <motion.div className="md:h-[20vh]" variants={textVariant()}>
          <p className={styles.sectionSubText}>Comentários</p>
          <h2 className={styles.sectionHeadText}>Feedbacks.</h2>
        </motion.div>
      </div>
      <div className={` ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </section>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
