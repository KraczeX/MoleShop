/* eslint-disable no-unused-vars */
import React from 'react';
import GitHub from '../assets/socials/github.svg'

import { TypeAnimation } from 'react-type-animation';


const Home = () => {
  return (
    <div className='hero h-screen flex items-center justify-center'>
      <div className='text-center md:w-1/2'>
      <h1 className="text-primary text-5xl font-extrabold tracking-wider mb-8">
            CodingMole Project
          </h1>
          <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We create amazing Websites',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We create amazing Bots',
        1000,
        'We create amazing Servers',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
      className='font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600'
    />
        <p className="text-light text-xl my-8">Transform your web presence with CodingMole's frontend expertise. Stunning UI, seamless interactions, unrivaled experiences. Elevate your site today!</p>
        <button className='btn py-4 px-16'>Projects</button>
      </div>
    </div>
  );
};

export default Home;