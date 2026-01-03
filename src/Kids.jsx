import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {kidssec1a, kidssec1b, kidssec1c, kidssec2a, kidssec2b, kidssec3a, kidssec3b, kidssec3c, kidssec4a, kidssec4b, kidssec4c, product2, product4, product5, product7, product8, product14, product15, product16 } from '../assets/images'

function Kids() {
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
        <span className="ml-3 text-xl">Kids</span>
       </a>
       <nav className="md:ml-auto md:mr-auto font-semibold flex flex-wrap items-center text-base justify-center">
         <a href='#NikeSKIMS' className="mr-5 hover:text-gray-900">Shop by Age</a>
         <a href='#NikeSKIMS' className="mr-5 hover:text-gray-900">Shoes</a>
         <a href='#Women' className="mr-5 hover:text-gray-900">Clothing</a>
         <a href='#Kids' className="mr-5 hover:text-gray-900">Accessories</a>
         <a href='#Kids' className="mr-5 hover:text-gray-900">Running Shoe Finder</a>
       </nav>
       
     </div>
   </header>

   {/* Hero section */}
    <section className="text-gray-600 body-font">
    
  <div className="mx-auto flex flex-col items-center bg-[url(/images/kidshero.avif)] bg-cover bg-center lg:h-[500px] h-96">
     <div className="flex-grow flex flex-col items-center justify-end text-white">
      <h1 className="text-6xl mb-4 font-extrabold text-center">
        Gift the Game
      </h1>
      <p className="mb-8 leading-relaxed">
        Celebrate the season for feel-good gifts for  young athletes
      </p>
      <div className="flex justify-center gap-0 pb-10 ">
        <button className="inline-flex text-gray-900 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-md font-semibold rounded-full">
          Shop Now
        </button>
      </div>
    </div>
  </div>  
</section>


{/* The latest section */}
<section className="text-gray-600 body-font w-full py-10">
  <h1 className='text-4xl text-gray-800 p-10'>The Latest</h1>
  <div className="flex flex-wrap gap-3 justify-center">

    <div className="w-[420px] overflow-hidden relative h-[160px] rounded-4xl">
      <img
        alt="feature"
        className="object-cover object-center h-full w-screen"
        src= {kidssec1a.avif}
      />
      
  </div>
    
     
    <div className="w-[420px] overflow-hidden relative h-[160px] rounded-4xl">
      <a href="">
        <img
        alt="feature"
        className="object-cover object-center w-screen h-full"
        src= {kidssec1b.avif}
      />
      </a>
      
    </div>

    <div className="w-[420px] overflow-hidden relative h-[160px] rounded-4xl">
      <a href="">
        <img
        alt="feature"
        className="object-cover object-center w-screen h-full"
        src={kidssec1c.avif}
      />
      </a>
     
    </div>
  </div>
</section>




{/* trending section */}
<section className="text-gray-600 body-font w-full">
  <h1 className='text-4xl text-gray-800 p-10'>Trending</h1>
  <div className="flex flex-wrap w-full h-full">
    <div className="lg:w-1/2 w-full overflow-hidden relative h-full">
      <img
        alt="feature"
        className="object-cover object-center w-screen h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px]"
        src={kidssec2a.avif}
      />
      <div className='text-start p-10 flex flex-col justity-center items-start space-y-4 absolute bottom-0 left-0'>
      <h5 className='text-white font-semibold bg-red'>Nike Shox TL</h5>
      <h2 className='text-white text-xl font-semibold bg-red'>Not Here To Be Liked</h2>
      <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-md font-semibold rounded-full">
          Shop
      </button>
    </div>
  </div>
    
     
    <div className="lg:w-1/2 w-full overflow-hidden relative h-full">
      <a href="">
        <img
        alt="feature"
        className="object-center w-screen h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px]"
        src={kidssec2b.avif}
      />
      </a>
      <div className='text-start p-10 flex flex-col justity-center items-start space-y-4 absolute bottom-0 left-0'>
      <h5 className='text-white font-semibold bg-red'>Nike Tech Woven</h5>
      <h2 className='text-white text-xl font-semibold bg-red'>Breathable Comfort for Kids</h2>
      <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-md font-semibold rounded-full">
          Shop
      </button>
    </div>
    </div>
  </div>
</section>


{/* Gear Up By Sport */}
 <section className="text-gray-600 body-font w-full pt-10">
  <h1 className='text-4xl text-gray-800 py-10 px-20'>Gear Up By Sport</h1>
  <div className="flex flex-wrap h-full w-full gap-7 justify-center">

    <div className="w-96 overflow-hidden relative h-96">
      <img
        alt="feature"
        className="object-cover object-center h-full w-screen"
        src= {kidssec3a.avif}
      />
      <div className='text-start p-10 flex flex-col justity-center items-start space-y-4 absolute bottom-0 left-0'>
      
      <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-md font-semibold rounded-full">
          Shop Baseball
      </button>
    </div>
  </div>
    
     
    <div className="w-96 overflow-hidden relative h-96">
      <a href="">
        <img
        alt="feature"
        className="object-cover object-center w-screen h-full"
        src= {kidssec3b.avif}
      />
      </a>
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
        src= {kidssec3c.avif}
      />
      </a>
      <div className='text-start p-10 flex flex-col justity-center items-start space-y-4 absolute bottom-0 left-0'>
     
      <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-md font-semibold rounded-full">
          Shop Soccer
      </button>
    </div>
    </div>
  </div>
</section>


{/* Shop By Age */}
 <section className="text-gray-600 body-font w-full pt-10">
  <h1 className='text-4xl text-gray-800 py-10 px-20'>Shop By Age</h1>
  <div className="flex flex-wrap h-full w-full gap-10 justify-center">

    <div className="flex  flex-col flex-wrap w-96">
      <img
        alt="feature"
        className="object-cover object-center w-full"
        src= {kidssec4a.avif}
      />
   
    <div className='text-start space-y-3 py-4 flex flex-col text-gray-900'>
      <h2 className='text-2xl font-normal'>Babies and Toddlers</h2>
      <p>Explore apparel(0M-4T) and shoes(0C-10C)</p>
      <button className="inline-flex w-[80px] text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-md font-semibold rounded-full">
          Shop
      </button>
  </div>
   </div>

  <div className="flex  flex-col flex-wrap w-96">
      <img
        alt="feature"
        className="object-cover object-center w-full"
        src= {kidssec4b.avif}
      />
   
    <div className='text-start space-y-3 py-4 flex flex-col text-gray-900'>
      <h2 className='text-2xl font-normal'>Little kids</h2>
      <p>Explore apparel(4-7) and shoes(10.5C-3Y)</p>
      <button className="inline-flex w-[80px] text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-md font-semibold rounded-full">
          Shop
      </button>
  </div>
   </div>

   <div className="flex  flex-col flex-wrap w-96">
      <img
        alt="feature"
        className="object-cover object-center w-full"
        src= {kidssec4c.avif}
      />
   
    <div className='text-start space-y-3 py-4 flex flex-col text-gray-900'>
      <h2 className='text-2xl font-normal'>Big kids</h2>
      <p>Explore apparel(XS-XL) and shoes(3.5-7Y)</p>
      <button className="inline-flex w-[80px] text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-md font-semibold rounded-full">
          Shop
      </button>
  </div>
  </div>  
  </div>
</section>


{/* products */}
<section className="text-gray-600 body-font">

  <div className="container px-4 py-15 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
  <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 text-gray-900">
   SPOTLIGHT
  </h1>
  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
    Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify,
    subway tile poke farm-to-table. 
  </p>
</div>

    <div className="flex flex-wrap m-4 w-2/3 text-center justify-center items-center mx-auto">
      <div className="lg:w-1/8 md:w-1/4 p-4">
        <a className="block relative rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-32 block"
            src= {product2.png}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-sm font-semibold text-center">
            Air Max
          </h2>
        </div>
      </div>
      
      <div className="lg:w-1/8 md:w-1/4 p-4">
        <a className="block relative rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-32 block"
            src={product4.png}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-sm font-semibold text-center">
            Dunk
          </h2>
        </div>
      </div>
      <div className="lg:w-1/8 md:w-1/4 p-4">
        <a className="block relative rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-32 block"
            src={product5.png}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-sm font-semibold text-center">
            Air Force 1
          </h2>
        </div>
      </div>
      
      <div className="lg:w-1/8 md:w-1/4 p-4">
        <a className="block relative rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-32 block"
            src= {product7.png}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-sm font-semibold text-center">
            Vomero 5
          </h2>
        </div>
      </div>
      <div className="lg:w-1/8 md:w-1/4 p-4">
        <a className="block relative rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-32 block"
            src= {product8.png}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-sm font-semibold text-center">
            Shox
          </h2>
        </div>
      </div>
      
      <div className="lg:w-1/8 md:w-1/4 p-4">
        <a className="block relative rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-32 block"
            src= {product14.png}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-sm font-semibold text-center">
            Sabrina 3
          </h2>
        </div>
      </div>
      <div className="lg:w-1/8 md:w-1/4 p-4">
        <a className="block relative rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-32 block"
            src={product15.png}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-sm font-semibold text-center">
            Freak 7
          </h2>
        </div>
      </div>
      <div className="lg:w-1/8 md:w-1/4 p-4">
        <a className="block relative rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-32 block"
            src= {product16.png}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-sm font-semibold text-center">
            Tatum 4
          </h2>
        </div>
      </div>
    </div>
  </div>
</section>

{/* prefooter */}
<section className="text-gray-600 body-font relative">

  <div className="flex flex-wrap text-center -mb-10 -mx-4 py-20 justify-center items-center">
    <div className="lg:w-1/6 md:w-1/4 px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
        Kid's Shoes
      </h2>
      <nav className="list-none mb-10 space-y-1">
        <li>
          <a className="text-gray-600 hover:text-gray-800">Basketball</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Jordan</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Running</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Lifestyle</a>
        </li>
      </nav>
    </div>
    
    <div className="lg:w-1/6 md:w-1/4 px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
        Kid's Clothing
      </h2>
      <nav className="list-none mb-10 space-y-1">
        <li>
          <a className="text-gray-600 hover:text-gray-800">Joggers & Sweatpants</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Hoodies & Sweatshirts</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Outerwear</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Pants & Tights</a>
        </li>
      </nav>
    </div>

    <div className="lg:w-1/6 md:w-1/4 px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
         Kid's Gear
      </h2>
      <nav className="list-none mb-10 space-y-1">
        <li>
          <a className="text-gray-600 hover:text-gray-800">All Kids Gear</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Bags & Backpacks</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Hats & Headwears</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Socks</a>
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

export default Kids