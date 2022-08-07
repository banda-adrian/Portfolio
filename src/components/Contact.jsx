import React from 'react'

const Contact = () => {
  return (

    <div name='contact' className='w-full h-screen bg-[#f2f2f2] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/45b84ab7-f6f7-4e0f-b167-de53d760ace4" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#4d0400] text-[#4d0400]'>Contact</p>
                <p className='text-[#4d0400] py-4'>// Submit the form below or shoot me an email - banda_adrian@outlook.com</p>
            </div>
            
            <input className='bg-[#ffebea] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ffebea]' type="email" placeholder='Your Email' name='email' />
            <textarea className='bg-[#ffebea] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-gray-300 hover:border-gray-300 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        
        </form>
    </div>

  )
}

export default Contact