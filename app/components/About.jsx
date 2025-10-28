import { assets, infoList } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='about'
      className='w-full px-[12%] py-10 scroll-mt-20 text-center'
    >
      {/* Heading */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='mb-2 text-lg font-Ovo'
      >
        Get to Know Me
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-5xl font-Ovo'
      >
        About Me
      </motion.h2>

      {/* About Text */}
<motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className='text-lg mt-10 mb-10 max-w-3xl mx-auto font-Ovo text-gray-800 dark:text-gray-200 leading-relaxed text-center'
>
  I’m Pavan Sugreev Kotapati, a Computer Science Engineer from Visakhapatnam, India. 
  I am passionate about building scalable, real-time systems, focusing on AI-driven applications, 
  system design, and full-stack web solutions developed by following agile methodologies.  
  <br /><br />
  I love combining creativity and logic to craft meaningful and user-centered technology.  
  Always curious and always learning — exploring how software and intelligence can create real impact.
</motion.p>


      {/* Info Cards */}
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto'
      >
        {infoList.map(({ icon, iconDark, title, description }, index) => (
          <motion.li
            whileHover={{ scale: 1.05 }}
            className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover
            hover:-translate-y-1 duration-500 hover:shadow-myblack dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
            key={index}
          >
            <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mx-auto mt-3' />
            <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
            <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default About;
