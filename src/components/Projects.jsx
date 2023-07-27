/* eslint-disable no-unused-vars */
import React from 'react';
import Headline from '../shared/Headline';
import projects from '../../public/projects.js';


const Projects = () => {
    return (
        <div className='max-w-7xl mx-auto md:py-8 px-7'>
            <Headline title={'PROJECTS'} subtitle={"Our portfolio showcases diverse projects, including our own initiatives and those undertaken for clients. Each of them has a case study. Feel free to explore our works!"}/>


            <div>
                {
                    projects.map(project => <div key={project.id}>
                        <div className='projects items-center my-20'>
                            <img src={project.image} alt="" srcset="" />
                            <div className='md:w-10/12 text-center md:text-left px-2'>
                                <h4 className='text-2xl font-bold mb-6'>{project.name}</h4>
                                <p className='text-lg text-[#666] leading-6 mb-6 '>{project.description}</p>
                                <button className=' btn py-3 px-7'><a href="#">Live Demo</a></button>
                            </div>
                        </div>
                         </div>)
                }
            </div>
        </div>


    );
};

export default Projects;