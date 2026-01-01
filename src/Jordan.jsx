import React from 'react'
import Contact from './Contact'
import Footer from './Footer'

function Jordan() {
  return (
    <>
        {/* SubHeader1 section */}
    <header className="text-white body-font bg-[#111111]">
     <div className="mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center justify-center py-3 bg-[#111111] w-full">
       
         <a href='#' className="mr-5 hover:text-gray-100 font-semibold underline text-sm">Get a Nike Gift Card</a>
       
     </div>
   </header>

   {/* SubHeader2 section */}
    <header className="text-white body-font bg-[#1F1F21]">
     <div className="container mx-auto flex flex-wrap p-2 flex-col items-center justify-center py-8">
        <img src="/images/jordan1.PNG" alt="" className='pb-10' />
       
       <nav className="md:ml-auto md:mr-auto font-semibold flex flex-wrap items-center text-base justify-center">
         <a href='#NikeSKIMS' className="mr-5 hover:text-gray-900">New Arrivals</a>
         <a href='#NikeSKIMS' className="mr-5 hover:text-gray-900">Jordan Sport</a>
         <a href='#Women' className="mr-5 hover:text-gray-900">Purpose & Community</a>
         <a href='#Kids' className="mr-5 hover:text-gray-900">Shoes</a>
         <a href='#Kids' className="mr-5 hover:text-gray-900">Clothing</a>
         <a href='#Kids' className="mr-5 hover:text-gray-900">Accessories</a>

       </nav>
       
     </div>
   </header>

    {/* Hero section */}
    <section className="text-gray-600 body-font">
    
  <div className="mx-auto flex flex-col items-center bg-[url(/images/jordanhero.avif)] bg-cover bg-center lg:h-[500px] h-96">
     <div className="flex-grow flex flex-col items-center justify-end text-white">
      <p className="mb-3 leading-relaxed font-semibold">
        Kids Air Jordan 11
      </p>
      <h1 className="text-6xl mb-4 font-extrabold text-center">
        Spark in the Dark
      </h1>
      <div className="flex justify-center gap-0 pb-10 ">
        <button className="inline-flex text-gray-900 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-md font-semibold rounded-full">
          Shop
        </button>
      </div>
    </div>
  </div>  
</section>

{/* Feature section */}
<section className="text-gray-600 body-font w-full">
  <h1 className='text-4xl text-white bg-[#1F1F21] p-10 pt-20 font-bold'>JORDAN FLEECE</h1>
  <div className="flex flex-wrap h-full w-full">
    <div className="lg:w-1/2 w-full overflow-hidden relative">
      <img
        alt="feature"
        className="object-cover object-center w-screen h-[400px] sm:h-[700px] md:h-[700px] lg:h-[700px]"
        src="/images/jordansec1a.avif"
      />
      <div className='text-start p-10 flex flex-col justity-center items-start space-y-4 absolute bottom-0 left-0'>
      <h2 className='text-white text-xl font-semibold bg-red'>CROSSOVER FLEECE</h2>
      <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-md font-semibold rounded-full">
          Shop
      </button>
    </div>
  </div>
    
     
    <div className="lg:w-1/2 w-full overflow-hidden relative h-full">
      <a href="">
        <img
        alt="feature"
        className="object-cover object-center w-screen h-[400px] sm:h-[700px] md:h-[700px] lg:h-[700px]"
        src="/images/jordansec1b.avif"
      />
      </a>
      <div className='text-start p-10 flex flex-col justity-center items-start space-y-4 absolute bottom-0 left-0'>
      <h2 className='text-white text-xl font-semibold bg-red'>BOOKFLEECE</h2>
      <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-md font-semibold rounded-full">
          Shop
      </button>
    </div>
    </div>
  </div>
</section>

{/* Shop By Age */}
 <section className="text-white body-font bg-[#1F1F21] w-full pt-10">
  <h1 className='text-4xl text-white py-10 px-20'>Shop By Age</h1>
  <div className="flex flex-wrap h-full w-full gap-10 justify-center">

    <div className="flex  flex-col flex-wrap w-96">
      <img
        alt="feature"
        className="object-cover object-center w-full"
        src="/images/jordansec2a.avif"
      />
   
    <div className='text-start space-y-3 py-4 flex flex-col text-gray-900 text-white'>
      <h2 className='text-2xl font-normal'>Air Jordan 5</h2>
      <p>Men's Shoes</p>
      <h2 className='text-2xl font-normal'>130</h2>
      
  </div>
   </div>

  <div className="flex  flex-col flex-wrap w-96">
      <img
        alt="feature"
        className="object-cover object-center w-full"
        src="/images/jordansec2b.avif"
      />
   
    <div className='text-start space-y-3 py-4 flex flex-col text-gray-900 text-white'>
      <h2 className='text-2xl font-normal'>T-Shirts</h2>
      <p>Men's Clothing</p>
      <h2 className='text-2xl font-normal'>130</h2>
  </div>
   </div>

   <div className="flex  flex-col flex-wrap w-96">
      <img
        alt="feature"
        className="object-cover object-center w-full"
        src="/images/jordansec2c.avif"
      />
   
    <div className='text-start space-y-3 py-4 flex flex-col text-gray-900 text-white'>
      <h2 className='text-2xl font-normal'>Air Jordan 11</h2>
      <p>Women's Shoes</p>
      <h2 className='text-2xl font-normal'>130</h2>
  </div>
  </div>  
  </div>
</section>

<Contact></Contact>
<Footer></Footer>
</>
  )
}

export default Jordan