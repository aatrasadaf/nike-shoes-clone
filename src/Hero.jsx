import React from 'react'
import {hero3} from './assets/images'

function Hero() {
  return (
    <>
      <section className="text-gray-600 body-font bg-red-700">
  <div className="container mx-auto flex px-5 md:py-24 py-10  md:flex-row flex-col-reverse items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 :pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center text-white align-middle justify-center">
      <h1 className="text-6xl mb-4 font-extrabold text-center">
        Never be the same
      </h1>
      <p className="mb-8 leading-relaxed">
        Because same was never be the goal. 
      </p>
      <div className="flex justify-center gap-0 ">
        <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-md font-semibold rounded-full">
          Get Notified
        </button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-md font-semibold rounded-full">
          Learn More
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded h-full"
        alt="hero"
        src= {hero3.png}
      />
    </div>
  </div>
</section>

    
    </>
  )
}

export default Hero