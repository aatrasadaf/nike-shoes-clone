import React from 'react'
import {AiOutlineHeart, AiOutlineShopping}  from 'react-icons/ai'
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <>
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd"></path>
      </svg> */}
      <svg 
       aria-hidden="true" 
       class="swoosh-svg" 
       focusable="false" 
       viewBox="0 0 24 24" 
       role="img" 
       width="80px" 
       height="80px" 
       fill="none"
       >
        <path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd"></path></svg>
      {/* <span className="ml-3 text-xl">Tailblocks</span> */}
    </a>
    <nav className="md:ml-80 md:mr-auto font-semibold flex flex-wrap items-center text-base justify-center">
      <Link to='/' className="mr-5 hover:text-gray-900">NikeSKIMS</Link>
      <Link to="men" className="mr-5 hover:text-gray-900">Men</Link>
      <Link to='women' className="mr-5 hover:text-gray-900">Women</Link>
      <Link to='kids' className="mr-5 hover:text-gray-900">Kids</Link>
      <Link to='jordan' className="mr-5 hover:text-gray-900">Jordan</Link>
      <Link to='sport' className="mr-5 hover:text-gray-900">Sport</Link>
      <Link to='sale' className="mr-5 hover:text-gray-900">Sale</Link>
    </nav>
    <div className='flex items-center space-x-2'>
      <form className="inline-flex items-center bg-gray-100 border-0 font-semibold py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-2xl text-base mt-4 md:mt-0 w-40">
        <input type="text" placeholder='Search' className='focus:outline-none text-base'/>
      </form>
      <button className='p-2 rounded-full hover:bg-gray-200'>
         <AiOutlineHeart className='w-6 h-6 cursor-pointer hover:text-red-500 '></AiOutlineHeart>
      </button>
      <Link to='cart'><button className='p-2 rounded-full hover:bg-gray-200'>
         <AiOutlineShopping className='w-6 h-6 cursor-pointer hover:text-gray-900 '></AiOutlineShopping>
      </button></Link>
      
      
    </div>
  </div>
</header>

    </>
  )
}

export default Navbar