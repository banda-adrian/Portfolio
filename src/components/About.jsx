import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#f2f2f2] text-[#4d0400]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#4d0400]'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-2xl font-bold'>
            <p>
              In the process of learning
              React
            </p>
          </div>
          <div>
            <p>
              Earned a certificate in Full Stack Web Development from Southern Methodist University.
              Gained knowledge of browser-based technologies, server-side development, and databases.
              By learning the fundamentals, I was able to create fully functional web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;