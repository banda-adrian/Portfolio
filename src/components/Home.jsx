import React from 'react';
import 'animate.css';
import scrollIntoView from 'scroll-into-view';
import { FaChevronDown } from 'react-icons/fa';

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
                {/* <scrollIntoView className="absolute inset-x-0 bottom-0" >
                    <div>
                        <FaChevronDown className='animate-bounce mx-auto text-3xl text-[#4d0400]' />
                    </div>
                </scrollIntoView> */}
            </div>
        </div>

    );
};

export default Home;