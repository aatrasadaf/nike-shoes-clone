import React from 'react'
import {feature1, feature3} from './assets/images'

function Features() {
  return (
    <>
      <section className="text-gray-600 body-font w-full">
  <div className="flex flex-wrap w-full h-full">
    <div className="lg:w-1/2 w-full overflow-hidden relative h-full">
      <img
        alt="feature"
        className="object-cover object-center w-screen h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px]"
        src={feature3}
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
        className="object-cover object-center w-screen h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px]"
        src= {feature1}
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

    </>
  )
}

export default Features