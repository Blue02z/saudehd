import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import Cards from './components/Cards'
import SectionThree from './components/SectionThree'
import SectionFour from './components/SectionFour'
import SectionFive from './components/SectionFive'
import Footer from './components/Footer'
function App() {


  return (
    <>
        <div className='flex flex-col justify-center'>
          <Navbar/>
          <SectionOne/>
          <SectionTwo/>
          <SectionThree/>
          <SectionFour/>
          <SectionFive/>
          <Footer/>
        </div>
    </>
  )
}

export default App
