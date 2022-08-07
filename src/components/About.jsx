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
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, quia velit, ullam nihil repellendus quis eum facilis alias deserunt sit maxime explicabo ad aperiam expedita animi! Assumenda aspernatur quaerat non?</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, deleniti excepturi illo autem eaque ut commodi labore quisquam reiciendis id. Soluta illo molestias fugiat eaque asperiores voluptas fuga ad magni!</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;