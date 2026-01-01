import React from 'react'

function Gallery() {
  return (
    <>
     <section className="text-gray-600 body-font w-full pt-10">
  <div className="flex flex-wrap h-full w-full gap-7 justify-center">

    <div className="w-96 overflow-hidden relative h-96">
      <img
        alt="feature"
        className="object-cover object-center h-full w-screen"
        src="/images/gallery1.jpg"
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
        src="/images/gallery2.jpg"
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
        src="/images/gallery3.jpg"
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

    </>
  )
}

export default Gallery