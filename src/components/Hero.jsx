import React from 'react';

import { FaGithub } from "react-icons/fa";
import ResumeBtn from './ResumeBtn';



function Hero() {
    return (
        <div className='h-screen grid grid-cols-1 lg:grid-cols-2 items-center lg:items-center lg:justify-center px-4 lg:px-0 mx-auto max-w-7xl gap-20'>
            <div >
                <div className='flex items-center w-full'>
                    <div className='text-6xl'>Mark Christian Mallari👋</div>

                </div>

                <div className='mt-4 text-xl'>
                    Aspiring <span className='font-bold text-secondary'>Web Developer</span> from Philippines
                </div>


                <div className='mt-4 flex items-center gap-5'>
                    <ResumeBtn/>

                    <a href="https://github.com/MarkMallari16" className='text-black hover:text-gray-700 transition-colors duration-300'>
                        <FaGithub className='size-8' />
                    </a>
                   
                </div>
            </div>
            <div className='hidden lg:block'>
                <div className="profile w-[30rem] h-[30rem] object-cover border-8 border-secondary">
                </div>
            </div>
        </div>
    );
}

export default Hero;
