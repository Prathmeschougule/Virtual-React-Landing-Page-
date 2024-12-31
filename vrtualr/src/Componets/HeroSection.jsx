import React from 'react'


function HeroSection() {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className='text-4xl sm:text-6xl lg:text-7xl  text-center tracking-wide'>
              VertualR Build tools
              <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text '>
                {"  "}for developers 
            </span>
        </h1>

        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
        </p>

        <div className=' mt-10 flex justify-center'>
                <a href="#" className='m-3 py-3 px-3 border  rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>
                    Start For Free
                </a>
                <a href="#" className='m-3 py-3 px-3 border  rounded-md'>
                    Documention
                </a>
        </div>

        <div className='flex justify-center mt-10'>
            <video autoPlay muted  loop src="/src/assets/video1.mp4"
            className='mx-2 my-4 rounded-lg w-1/2 border border-orange-600 shadow-orange-500'
            />
             <video autoPlay muted  loop src="/src/assets/video2 .mp4"
            className=' mx-2 my-4 rounded-lg w-1/2 border  border-orange-600 shadow-orange-500'
            /> 
        </div>
          
    </div>
  )
}

export default HeroSection