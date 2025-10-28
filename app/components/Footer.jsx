import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      {/* Top Section */}
      <div className='text-center'>
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt='logo'
          className='w-36 mx-auto'
        />

        <div className='w-max flex items-center gap-2 mx-auto mt-3'>
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt='Mail icon'
            className='w-6'
          />
          <p className='text-gray-800 dark:text-gray-200'>
            <a href='mailto:sugreevpavan13@gmail.com'>
              sugreevpavan13@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] py-6 mt-12'>
        {/* Left Text */}
        <p className='text-gray-700 dark:text-gray-300'>
          © 2025 Pavan Sugreev Kotapati. All rights reserved.
        </p>

        {/* Right Links */}
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/pavansugreev/'
              className='hover:underline text-gray-800 dark:text-gray-200'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href='https://github.com/PavanSugreev04'
              className='hover:underline text-gray-800 dark:text-gray-200'
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
