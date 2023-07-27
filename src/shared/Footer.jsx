/* eslint-disable no-unused-vars */
import React from 'react';
import YouTube from '../assets/icons-white/yt-ico.png';
import GitHub from '../assets/icons-white/github-white.png';
import Linkedin from '../assets/icons-white/linkedin-white.png';
import TikTok from '../assets/icons-white/tiktok-128.png';
import Discord from '../assets/icons-white/discord-2-128.png';

const Footer = () => {
  return (
    <div className='bg-black md:h-96 px-7'>
      <div className='max-w-7xl mx-auto py-20 flex flex-col md:flex-row justify-between'>
      <div className='md:w-2/5 ,y-3'>
            <h4 className='text-white font-bold text-2xl tracking-wide'>CODING MOLE</h4>
            <p className='mt-5 text-md leading-7 text-[#eee]'>Explore further to learn about us, our services, and the cutting-edge technologies. Contact with us in the links bellow.</p>
      </div>

      <div className='my-3'>
        <h4 className='text-white font-bold text-2xl tracking-wide'>SOCIAL</h4>
        <div className=' mt-5 flex gap-4'>
          <a href="" className='ml-1'><img src={YouTube} alt="" className='w-7 h-7'/></a>
          <a href="" className='ml-1'><img src={GitHub} alt="" className='w-7 h-7'/></a>
          <a href="" className='ml-1'><img src={Linkedin} alt="" className='w-7 h-7'/></a>
          <a href="" className='ml-1'><img src={TikTok} alt="" className='w-7 h-7'/></a>
          <a href="" className='ml-1'><img src={Discord} alt="" className='w-7 h-7'/></a>
        </div>
      </div>
      </div>
      <hr className='text-slate-50 opacity-30 px-7'/>

      <div>
        <p className='md:my-10 py-10 md:py-0 text-sm leading-7 text-[#eee] text-center'>© Copyright 2023. Made by <a href="" className='underline'>CodingMole Project</a></p>
      </div>

    </div>
  );
};

export default Footer;