/* eslint-disable no-unused-vars */
import React from 'react';
import Headline from '../shared/Headline';
import Skills from '../../public/skills';
import skills from '../../public/skills';

const About = () => {
    return (
        <div className='max-w-7xl mx-auto my-14 md:py-8 px-7'>
            <Headline title={'About Us'} subtitle={'Explore further to learn about us, our services, and the cutting-edge technologies we utilize unlocking new digital possibilities below!'}/>

            <div className='flex flex-col md:flex-row items-start justify-start'> 
                <div className='md:w-1/2 my-8'>
                    <h4 className='text-2xl font-bold mb-8'>Get to know us!</h4>
                    <div className='md:10/12 text-lg text-[#666] mb-8'>
                    <p className='mb-5'>We are a project specializing in creating Discord servers, websites, and Discord bots. Our project is called <strong>Coding Mole Project</strong>.</p>
                    <p className='mb-5'>As <strong>Web Developers</strong>, we build both frontend and backend of websites and web applications, contributing to the success of the overall product. Check out some of our     works in the <strong>Projects</strong> section.</p>
                    <p className='mb-5'>Additionally, we love sharing knowledge gained over the years in <strong>web development</strong> to help others in the developer community. Feel free to connect and follow us on <a href="#" className='text-[#0226bb] font-bold '>Discord</a>, where we share useful content related to web development and programming.</p>
                    <p className='mb-5'>We are also openned to <strong>Job </strong>opportunities where we can contribute, learn, and grow. If you have a good opportunity that matches our skills and experience, don't hesitate to <strong>contact us</strong>.</p>
                    </div>
                </div>
                <div className='md:w-1/2 my-8'>
                    <h4 className='text-2xl font-bold mb-8'>Our Skills</h4>
                    <div className=' flex flex-wrap gap-3 md:w-10/12'>
                        {
                            skills.map(skill => <p key={skill.id} className='bg-slate-300 text-light py-2 px-4 rounded'>{skill.title}</p>)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;