/* eslint-disable no-unused-vars */
import React from 'react';

import YouTube from '../assets/socials/youtube.svg';
import GitHub from '../assets/socials/github.svg';
import Instagram from '../assets/socials/instagram.svg';
import TikTok from '../assets/socials/TikTok.svg';
import Discord from '../assets/socials/discord.svg';

import { TypeAnimation } from 'react-type-animation';

import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";



const Home = () => {
  return (
    <div className="hero my-8 md:py-8 px-7 relative" id="home">
    <div className='hero h-screen flex items-center justify-center'>
    <motion.div 
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center md:w-1/2">
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
      className='font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-blue-600 to-pink-400'
    />
        <p className="text-light text-xl my-8">Transform your web presence with CodingMole's frontend expertise. Stunning UI, seamless interactions, unrivaled experiences. Elevate your site today!</p>
       
        </motion.div>

      

      <div className="bg-white w-20 rounded py-1 px-2 absolute left-0 top-48 hidden md:block">
      <div className='my-1'>
        <a href="https://github.com/KraczeX" className='p-3 hover:bg-slate-400 block rounded transition-all duration-500'>
          <img src={GitHub} alt="" className='w-10 h-10'/>
        </a>
        </div>
        <div className='my-1'>
        <a href="https://www.youtube.com/channel/UCNxk1gQ9EnqzG25cfdtOIvA" className='p-3 hover:bg-slate-400 block rounded transition-all duration-500'>
          <img src={YouTube} alt="" className='w-10 h-10'/>
        </a>
        </div>
        <div className='my-1'>
        <a href="https://www.instagram.com/coding_mole/" className='p-3 hover:bg-slate-400 block rounded transition-all duration-500'>
          <img src={Instagram} alt="" className='w-10 h-10'/>
        </a>
        </div>
        <div className='my-1'>
        <a href="" className='p-3 hover:bg-slate-400 block rounded transition-all duration-500'>
          <img src={TikTok} alt="" className='w-10 h-10'/>
        </a>
        </div>
        <div className='my-1'>
        <a href="https://discord.gg/AXrJ7zbMxn" className='p-3 hover:bg-slate-400 block rounded transition-all duration-500'>
          <img src={Discord} alt="" className='w-10 h-10'/>
        </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;