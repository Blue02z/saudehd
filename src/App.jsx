import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import Cards from './components/Cards'
import SectionThree from './components/SectionThree'
function App() {


  return (
    <>
        <div className='flex flex-col justify-center'>
          <Navbar/>
          <SectionOne/>
          <SectionTwo/>
          <SectionThree/>
        </div>
    </>
  )
}

export default App
