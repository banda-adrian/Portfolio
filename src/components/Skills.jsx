import React from 'react';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#f2f2f2] text-[#4d0400]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#4d0400]'>Skills</p>
                    <p className='py-6'>These are the platforms that I have worked with.</p>
                </div>

                {/* Platforms, Libraries, Frameworks */}
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={'https://img.icons8.com/color/480/000000/html-5--v1.png'} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={'https://img.icons8.com/color/480/000000/css3.png'} alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={'https://img.icons8.com/color/480/000000/javascript--v1.png'} alt="JAVASCRIPT icon" />
                        <p className='my-4'>Javascript</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={'https://img.icons8.com/color/480/000000/react-native.png'} alt="REACT icon" href="https://reactjs.org/" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={'https://img.icons8.com/color/480/000000/github--v1.png'} alt="GITHUB icon" />
                        <p className='my-4'>Github</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={'https://img.icons8.com/color/480/000000/npm.png'} alt="NPM icon" />
                        <p className='my-4'>npm</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={'https://img.icons8.com/color/480/000000/nodejs.png'} alt="NODE icon" />
                        <p className='my-4'>Node JS</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={'https://img.icons8.com/color/480/000000/tailwindcss.png'} alt="TAILWIND icon" />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={'https://img.icons8.com/color/480/000000/bootstrap.png'} alt="BOOTSTARP icon" />
                        <p className='my-4'>Bootsrap</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={'https://img.icons8.com/color/480/000000/mysql-logo.png'} alt="MySQL icon" />
                        <p className='my-4'>MySQL</p>
                    </div>

                </div>
            </div>
        </div>
    );
};




export default Skills;