import React from 'react'
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import Products from './Products'
import Gallery from './Gallery'
import Contact from './Contact'
import Footer from './Footer'
import Men from './Men'
import Women from './Women'
import Kids from './Kids'
import Nikesims from './Nikesims'
import Cart from './Cart'
import Jordan from './Jordan'
import Sport from './Sport'
import Sale from './Sale';


function App() {

  return (
    <>

    <BrowserRouter basename="/nike-shoes-clone">
      
      <Navbar></Navbar>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Nikesims/>}/>
        {/* Men page route */}
        <Route path="/men" element={<Men />} />
         {/* Women page route */}
        <Route path="/women" element={<Women />} />
        {/* kids page route */}
        <Route path="/kids" element={<Kids />} />
         {/* cart page route */}
        <Route path="/cart" element={<Cart />} />
         {/* jordan page route */}
        <Route path="/jordan" element={<Jordan />} />
         {/* sport page route */}
        <Route path="/sport" element={<Sport />} />
         {/* sale page route */}
        <Route path="/sale" element={<Sale />} />
      </Routes>
    </BrowserRouter>
 

    {/* 
      <Hero></Hero>
      <Features></Features>
      <Gallery></Gallery>
      <Products></Products>
      <Contact></Contact>
      <Footer></Footer> 
 */} 

    </>
  )
}


export default App
