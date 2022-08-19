import React from 'react';

const Work = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-[#4d0400] bg-[#f2f2f2]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#4d0400]'>Projects</p>
          <p className='py-6'>Check out some of my work.</p>
        </div>

        {/* Projects container*/}
        <div className='flex flex-wrap -m-4'>
          {/* Calculator Project */}
          <div className='p-4 md:w-1/4'>
            <div className='hover:scale-110 duration-500'>
              <div className='h-full overflow-hidden'>
                <img src='https://img.icons8.com/3d-fluency/1600/000000/3d-fluency-calculator-2.png' alt='calculator' />
                <div className='p-6'>
                  <h2 className='tracking-widest text-xs font-medium text-gray-500 mb-1'></h2>
                  <h1 className='text-lg font-medium text-black mb-3'>Calculator</h1>
                  <div className='flex'>
                    <button type='button' onClick={(e) => {
                      e.preventDefault();
                      window.location.href = 'https://github.com/banda-adrian/calculator-React';
                    }}
                      className='px-1 p-3 rounded-lg text-[#4d0400] hover:bg-[#4d0400] hover:text-white mr-8'>Repository</button>
                    <button type='button' onClick={(e) => {
                      e.preventDefault();
                      window.location.href = 'https://banda-adrian.github.io/calculator-React/';
                    }}
                      className='px-1 p-3 rounded-lg text-[#4d0400] hover:bg-[#4d0400] hover:text-white'>Launch App</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Weather App Project */}
          <div className='p-4 md:w-1/4'>
            <div className='hover:scale-110 duration-500'>
              <div className='h-full overflow-hidden'>
                <img src='https://img.icons8.com/fluency/1600/000000/thermometer.png' alt='weather' />
                <div className='p-6'>
                  <h2 className='tracking-widest text-xs font-medium text-gray-500 mb-1'></h2>
                  <h1 className='text-lg font-medium text-black mb-3'>Weather App</h1>
                  <div className='flex'>
                    <button type='button' onClick={(e) => {
                      e.preventDefault();
                      window.location.href = 'https://github.com/banda-adrian/weather-React';
                    }}
                      className='px-1 p-3 rounded-lg text-[#4d0400] hover:bg-[#4d0400] hover:text-white mr-8'>Repository</button>
                    <button type='button' onClick={(e) => {
                      e.preventDefault();
                      window.location.href = 'https://banda-adrian.github.io/weather-React/';
                    }}
                      className='px-1 p-3 rounded-lg text-[#4d0400] hover:bg-[#4d0400] hover:text-white'>Launch App</button>
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


