import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Products from './Products'
import { Link } from 'react-router-dom'
import Nikesims from './Nikesims'
import Kids from './Kids'
import {gallery1, gallery2, gallery3, featuremen1, featuremen2} from './assets/images'


function Men() {
  return (
    <>
    
  {/* SubHeader1 section */}
    <header className="text-gray-600 body-font">
     <div className="mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center justify-center py-3 bg-gray-300 w-full">
       
         <a href='#' className="mr-5 hover:text-gray-100 font-semibold underline text-sm">Get a Nike Gift Card</a>
       
     </div>
   </header>

  {/* SubHeader2 section */}
    <header className="text-gray-600 body-font">
     <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center justify-center py-8">
       <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span className="ml-3 text-xl">Men</span>
       </a>
       <nav className="md:ml-auto md:mr-auto font-semibold flex flex-wrap items-center text-base justify-center">
         <a href='#NikeSKIMS' className="mr-5 hover:text-gray-900">Shoes</a>
         <a href='#Women' className="mr-5 hover:text-gray-900">Clothing</a>
         <a href='#Kids' className="mr-5 hover:text-gray-900">Accessories</a>
       </nav>
       
     </div>
   </header>


  {/* Hero section */}
    <section className="text-gray-600 body-font">
    
  <div className="mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-[url(/images/menhero.jpg)] bg-cover bg-center h-96">
  </div>

  <div className="lg:flex-grow md:w-full lg:pr-24 :pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center text-gray-800 align-middle justify-center my-10">
      <h1 className="text-6xl mb-4 font-extrabold text-center">
        Never be the same
      </h1>
      <p className="mb-8 leading-relaxed">
        Because same was never be the goal. 
      </p>
      <div className="flex justify-center gap-0 pb-10 ">
        <button className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-md font-semibold rounded-full">
          Shop Now
        </button>
      </div>
    </div>
</section>

{/* Gallery section */}
<section className="text-gray-600 body-font w-full pt-10">
  <h1 className='text-4xl text-gray-800 p-10 pt-20'>Shop by Sport</h1>
  <div className="flex flex-wrap h-full w-full gap-7 justify-center">

    <div className="w-96 overflow-hidden relative h-96">
      <img
        alt="feature"
        className="object-cover object-center h-full w-screen"
        src= {gallery1.jpg}
      />
      <div className='text-start p-10 flex flex-col justity-center items-start space-y-4 absolute bottom-0 left-0'>
      
      <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-md font-semibold rounded-full">
          Shop Basketball
      </button>
    </div>
  </div>
    
     
    <div className="w-96 overflow-hidden relative h-96">
      <a href="">
        <img
        alt="feature"
        className="object-cover object-center w-screen h-full"
        src= {gallery2.jpg}
      />
      </a>
      <div className='text-start p-10 flex flex-col justity-center items-start space-y-4 absolute bottom-0 left-0'>
      
      <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-md font-semibold rounded-full">
          Shop Runner
      </button>
    </div>
    </div>

    <div className="w-96 overflow-hidden relative h-96">
      <a href="">
        <img
        alt="feature"
        className="object-cover object-center w-screen h-full"
        src= {gallery3.jpg}
      />
      </a>
      <div className='text-start p-10 flex flex-col justity-center items-start space-y-4 absolute bottom-0 left-0'>
     
      <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-md font-semibold rounded-full">
          Shop Baseball
      </button>
    </div>
    </div>
  </div>
</section>



{/* Feature section */}
<section className="text-gray-600 body-font w-full">
  <h1 className='text-4xl text-gray-800 p-10 pt-20'>Trending Now</h1>
  <div className="flex flex-wrap h-full w-full">
    <div className="lg:w-1/2 w-full overflow-hidden relative">
      <img
        alt="feature"
        className="object-cover object-center w-screen h-[400px] sm:h-[700px] md:h-[700px] lg:h-[700px]"
        src= {featuremen1.jpg}
      />
      <div className='text-start p-10 flex flex-col justity-center items-start space-y-4 absolute bottom-0 left-0'>
      <h5 className='text-white font-semibold bg-red'>Introducing</h5>
      <h2 className='text-white text-xl font-semibold bg-red'>NikeSIMS</h2>
      <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-md font-semibold rounded-full">
          Shop Now
      </button>
    </div>
  </div>
    
     
    <div className="lg:w-1/2 w-full overflow-hidden relative h-full">
      <a href="">
        <img
        alt="feature"
        className="object-cover object-center w-screen h-[400px] sm:h-[700px] md:h-[700px] lg:h-[700px]"
        src= {featuremen2.jpg}
      />
      </a>
      <div className='text-start p-10 flex flex-col justity-center items-start space-y-4 absolute bottom-0 left-0'>
      <h5 className='text-white font-semibold bg-red'>Court-ready-styles</h5>
      <h2 className='text-white text-xl font-semibold bg-red'>Score Gifts for Hoopers</h2>
      <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-md font-semibold rounded-full">
          Shop Gifts
      </button>
    </div>
    </div>
  </div>
</section>

{/* Banner section */}
<section className="text-gray-600 body-font my-15">
  <div className="mx-auto flex md:flex-row flex-col items-end bg-[url(/images/bannermen.jpg)] bg-cover bg-center h-screen">
    <div className="flex-grow flex flex-col items-center text-white justify-end my-20">
      <h1 className="text-6xl mb-4 font-extrabold text-center">
        GIFT THE GAME
      </h1>
      <p className="mb-8 leading-relaxed">
        Find the gifts engineered for greatness
      </p>
      <div className="flex justify-center gap-0 ">
        <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-md font-semibold rounded-full">
          Shop Gifts
        </button>
      </div>
    </div>
  </div>
</section>

{/* Shop by Category section */}
<section className="text-gray-900 body-font w-full pb-15">
  <h1 className='text-4xl text-gray-800 p-10'>Shop by Category</h1>
  <div className="flex flex-wrap h-full w-full gap-7 justify-center">

   <div className="flex flex-col w-96 h-96 pb-7">
      <img
        alt="feature"
        className="object-cover object-center h-full w-screen"
        src= {gallery1.jpg}
      />
       <a href="#"><h1 className='text-2xl py-2'>Accessories</h1></a>
   </div>

   <div className="flex flex-col w-96 h-96 pb-7">
      <img
        alt="feature"
        className="object-cover object-center h-full w-screen"
        src= {gallery2.jpg}
      />
       <a href="#"><h1 className='text-2xl py-2'>Shoes</h1></a>
   </div>
  
  <div className="flex flex-col w-96 h-96 pb-7">
      <img
        alt="feature"
        className="object-cover object-center h-full w-screen"
        src= {gallery3.jpg}
      />
       <a href="#"><h1 className='text-2xl py-2'>Clothing</h1></a>
   </div>
  </div>
</section>

    <Products></Products>
  
  {/* PreFooter Section */}
  <section>
  <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4 py-20 justify-center">
    <div className="lg:w-1/6 md:w-1/2 px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
        Men's Shoes
      </h2>
      <nav className="list-none mb-10 space-y-1">
        <li>
          <a className="text-gray-600 hover:text-gray-800">Running</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Basketball</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Golf</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Tennis Shoes</a>
        </li>
      </nav>
    </div>
    <div className="lg:w-1/6 md:w-1/2 px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
         Men's Clothing
      </h2>
      <nav className="list-none mb-10 space-y-1">
        <li>
          <a className="text-gray-600 hover:text-gray-800">Tops & T-Shirts</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Jackets</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Hoddies</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Pants</a>
        </li>
      </nav>
    </div>
    <div className="lg:w-1/6 md:w-1/2 px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
        Men's Gear
      </h2>
      <nav className="list-none mb-10 space-y-1">
        <li>
          <a className="text-gray-600 hover:text-gray-800">All Men's Gear</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Socks</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Bags & Backpacks</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Balls</a>
        </li>
      </nav>
    </div>
    <div className="lg:w-1/6 md:w-1/2 px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
        Featured
      </h2>
      <nav className="list-none mb-10 space-y-1">
        <li>
          <a className="text-gray-600 hover:text-gray-800">New Releases</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Sale</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">NFL</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Men's Essentials</a>
        </li>
      </nav>
    </div>
    
    

  </div>
  <hr className='border-1 border-gray-100 mx-20'/>
</section>
    <Footer></Footer>
    </>
  )
}

export default Men