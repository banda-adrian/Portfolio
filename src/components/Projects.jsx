import React from 'react';

const Work = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-[#4d0400] bg-[#f2f2f2]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#4d0400]'>
            Projects
          </p>
          <p className='py-6'>
            {/* Some of my work. */}
          </p>

          {/* Currently Building .... */}

          {/* Porjects */}
          <div className='flex flex-wrap -m-4'>
            {/* Porject 1 */}
            <div className='p-4 md:w-1/3'>

              <div className='hover:scale-110 duration-500'>
                <div className='h-full  overflow-hidden'>
                  <img className='' src='https://img.icons8.com/3d-fluency/1600/000000/3d-fluency-calculator-2.png' alt='calculator' />
                  <div className='p-6'>
                    <h2 className='tracking-widest text-xs font-medium text-gray-500 mb-1'>Personal Build - building in progress...</h2>
                    <h1 className='text-lg font-medium text-black mb-3'>Calculator</h1>
                    <div className='flex'>
                      <button type='button' onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://github.com/banda-adrian/calculator-React';
                      }}
                        className='px-4 p-3 rounded-lg text-[#4d0400] hover:bg-[#4d0400] hover:text-white mr-12'>Repository</button>
                      <button type='button' onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://banda-adrian.github.io/calculator-React/';
                      }}
                        className='px-4 p-3 rounded-lg text-[#4d0400] hover:bg-[#4d0400] hover:text-white'>Launch App</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;


