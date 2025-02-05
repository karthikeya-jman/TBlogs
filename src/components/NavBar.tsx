import React from 'react'
import { IoSearch } from "react-icons/io5";


const NavBar = () => {

    const logoStart :String = "{";
    const logoEnd :String = "}";


  return (
    <div className='flex items-center justify-between px-20 py-6 bg-zinc-900 border-b-1 border-zinc-800 sticky top-0'>
        <p className='flex items-center gap-3 text-2xl'>
            <span className='text-orange-500 font-bold text-3xl'>{logoStart}</span>
            <span className='font-medium'>TBlogs</span>
            <span className='text-blue-500 font-bold text-3xl'>{logoEnd}</span>
        </p>

        <ul className='flex flex gap-9 text-xl'>
            <li><a href="">Home</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="">AboutUs</a></li>
            <li><a href="">ContactUs</a></li>
            <li><a href="">Subscribe</a></li>
        </ul>

        <div className='flex items-center text-xl gap-1'>
            <IoSearch/>
            <a href="">Login</a>
        </div>
    </div>
  )
}

export default NavBar