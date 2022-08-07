import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import 'animate.css';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#f2f2f2]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#740600]'>Welcome, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#4d0400]'>
                    Adrian Banda
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#4d0400]'>
                    I'm a Work in progress.
                </h2>
                <p className='text-[#740600] py-4 max-w-[700px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis molestiae similique atque, nam est ipsam sequi obcaecati quis, numquam iure, deleniti quibusdam enim explicabo! Illum dicta culpa commodi atque autem?
                </p>
                
                <div>
                    <button className='text-[#4d0400] border-[#4d0400] group border-2 px-6 py-3 my-2 flex items-center hover:text-white hover:bg-[#740600] hover:border-white'>
                        View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span>
                    </button>
                </div>
                
            </div>
        </div>
    );
};

export default Home;