import React from 'react'
import { Menu,X } from 'lucide-react'
import { useState } from 'react'
import { navItems } from '../Constant'

function Navbar() {
const [mobileDrawerOpen,setmobileDrawerOpen]=useState(false);

const togglenavbar=()=>{
    setmobileDrawerOpen(!mobileDrawerOpen);
}



  return (
    <nav className="sticky top-0 z-50 py-3 border-b border-neutral-700 backdrop-blur-lg bg-opacity-20 bg-gray-800">
                <div className="container px-4 mx-auto relative text-sm">
                    <div className="flex justify-between items-center ">
                        <div className='flex justify-center flex-shrink-0'>
                            <img className='h-10 w-10 mr-2' src="/src/assets/logo.png" alt="" />
                            <span className='text-xl tracking-tight mt-2'>Virtual</span>
                        </div>
                        <ul className='hidden lg:flex ml-14 space-x-12'>
                                {navItems.map((item,index)=>(
                                    <li key={index}>
                                        <a href={item.href}>{item.label}</a>
                                    </li>
                                ))}
                        </ul>
                        <div className='hidden lg:flex justify-center space-x-12 items-center'>
                                <a href="#" className='px-3 py-2 border rounded-md' >
                                    Login
                                </a>
                                <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 border rounded-md px-3 py-2   '>
                                    Create An accound  
                                </a>
                        </div>
                        <div className='lg:hidden md:flex flex-col justify-end'>
                            <button onClick={togglenavbar}>
                                {mobileDrawerOpen ? <X/> :<Menu/>}
                            </button>
                        </div>
                    </div>
                    {mobileDrawerOpen && (

                        <div className=' fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col 
                        justify-center items-center lg:hidden ' >

                            <ul className=' lg:hidden  ml-14 '>
                                {navItems.map((item,index)=>(
                                    <li key={index} className='py-4'>
                                        <a href={item.href}>{item.label}</a>
                                    </li>
                                ))}
                        </ul>
                         <div className=' lg:hidden flex justify-center space-x-5 items-center'>
                                <a href="#" className='px-3 py-2 border rounded-md' >
                                    Login
                                </a>
                                <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 border rounded-md px-3 py-2   '>
                                    Create An accound  
                                </a>
                        </div>

                                
                        </div>
                    )}
                </div>
        </nav>
  )
}

export default Navbar