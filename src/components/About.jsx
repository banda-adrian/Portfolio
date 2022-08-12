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
            I have earned a certificate in Full Stack Web Development from the Southern Methodist University. During the course, I gained a knowledge of server-side development, databases and, browser-based technologies. With this knowledge I have been able to create fully functional web applications as shown below.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;