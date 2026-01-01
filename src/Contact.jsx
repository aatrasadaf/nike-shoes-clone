import React from 'react'

function Contact() {
  return (
    <>
      <section className="text-gray-600 body-font relative">
      <div className='container flex flex-wrap flex-col items-center justify-center'>
     <img
     alt='nikelogo'
     className='w-32 mb-4'
     src='/images/nikeLogo.png'
    
    />
  <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-semibold">
  <a className="mr-5 hover:text-gray-900">Find a Store</a>
  <a className="mr-5 hover:text-gray-900">Help</a>
  <a className="mr-5 hover:text-gray-900">Join us</a>
  <a className="mr-5 hover:text-gray-900">Sign In</a>
</nav>
</div>

  <div className="flex flex-wrap text-center -mb-10 -mx-4 py-20 justify-center items-center">
    <div className="lg:w-1/6 md:w-1/4 px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
        Featured
      </h2>
      <nav className="list-none mb-10 space-y-1">
        <li>
          <a className="text-gray-600 hover:text-gray-800">Air Force 1</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Jordan 1</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Air Max Dn</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Vomero</a>
        </li>
      </nav>
    </div>
    <div className="lg:w-1/6 md:w-1/4 px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
         Shoes
      </h2>
      <nav className="list-none mb-10 space-y-1">
        <li>
          <a className="text-gray-600 hover:text-gray-800">All Shoes</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Jordan Shoes</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Running Shoes</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Basketball Shoes</a>
        </li>
      </nav>
    </div>
    <div className="lg:w-1/6 md:w-1/4 px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
        Clothing
      </h2>
      <nav className="list-none mb-10 space-y-1">
        <li>
          <a className="text-gray-600 hover:text-gray-800">All Clothing</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Tops & T-Shirts</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Shorts</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Hoodies & Pullovers</a>
        </li>
      </nav>
    </div>
    <div className="lg:w-1/6 md:w-1/4 px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
        Kids
      </h2>
      <nav className="list-none mb-10 space-y-1">
        <li>
          <a className="text-gray-600 hover:text-gray-800">Infant & Toddeler Shoes</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Kids Shoes</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Kids Basketball Shoes</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Kids Running Shoes</a>
        </li>
      </nav>
    </div>
    
    

  </div>
  <hr className='border-1 border-gray-100 mx-20'/>
</section>
</>
  )
}

export default Contact