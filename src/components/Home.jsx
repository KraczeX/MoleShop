/* eslint-disable no-unused-vars */
import React from 'react';

import YouTube from '../assets/socials/youtube.svg';
import GitHub from '../assets/socials/github.svg';
import Instagram from '../assets/socials/instagram.svg';
import TikTok from '../assets/socials/TikTok.svg';
import Discord from '../assets/socials/discord.svg';

import { TypeAnimation } from 'react-type-animation';



const Home = () => {
  return (
    <div className="hero my-8 md:py-8 px-7 relative" id="home">
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
      className='font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-blue-600 to-pink-400'
    />
        <p className="text-light text-xl my-8">Transform your web presence with CodingMole's frontend expertise. Stunning UI, seamless interactions, unrivaled experiences. Elevate your site today!</p>
        <button className='btn py-4 px-16'>Projects</button>
      </div>

      <div className='bg-white w-20 rounded py-1 px-2 absolute left-0 top-48 hidden md:block'>
      <div className='py-1'>
        <a href="" className='p-3 hover:bg-slate-400 block rounded transition-all duration-500'>
          <img src={GitHub} alt="" className='w-10 h-10'/>
        </a>
        </div>
        <div className='py-1'>
        <a href="" className='p-3 hover:bg-slate-400 block rounded transition-all duration-500'>
          <img src={YouTube} alt="" className='w-10 h-10'/>
        </a>
        </div>
        <div className='py-1'>
        <a href="" className='p-3 hover:bg-slate-400 block rounded transition-all duration-500'>
          <img src={Instagram} alt="" className='w-10 h-10'/>
        </a>
        </div>
        <div className='py-1'>
        <a href="" className='p-3 hover:bg-slate-400 block rounded transition-all duration-500'>
          <img src={TikTok} alt="" className='w-10 h-10'/>
        </a>
        </div>
        <div className='py-1'>
        <a href="" className='p-3 hover:bg-slate-400 block rounded transition-all duration-500'>
          <img src={Discord} alt="" className='w-10 h-10'/>
        </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;