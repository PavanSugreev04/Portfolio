import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-2'>
      
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt='Pavan Sugreev'
          className='rounded-full w-32 mb-2'
        />
      </motion.div>

      <motion.h3
  initial={{ y: -20, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className='flex items-center justify-center gap-2 mb-3 text-lg sm:text-xl font-Ovo'
>
  Hi! I'm Pavan Sugreev
  <Image src={assets.hand_icon} alt='wave' className='w-5' />
</motion.h3>

<motion.h1
  initial={{ y: -30, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className='text-3xl sm:text-4xl lg:text-[34px] font-Ovo text-center leading-tight'
>
   Aspiring Software Developer | ML & Full-Stack Enthusiast
</motion.h1>

<motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.7 }}
  className='text-base sm:text-lg text-center mx-auto mt-4 font-Ovo text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed'
>
  I enjoy designing smart, user-focused systems that blend creativity with logic building meaningful technology with purpose and precision.
</motion.p>


      <div className='flex flex-col sm:flex-row items-center gap-4 mt-7'>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href='#contact'
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
        >
          Say Hi! <Image src={assets.arrow_icon_dark} alt='' className='w-2' />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href='https://drive.google.com/file/d/1YtvzM0BThri75IOrSisJtKlWvEyzp1nh/view?usp=sharing'
          target='_blank'
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
        >
          Resume <Image src={assets.download_icon} alt='' className='w-4' />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
