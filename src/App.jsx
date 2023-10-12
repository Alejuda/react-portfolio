// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MediaSide from './components/MediaSide'
import Home from './components/Home'
import RecentWorks from './components/RecentWorks'
import About from './components/About'

function App() {

  return (
    <>
      <Navbar />
      <MediaSide />
      <Home />
      <RecentWorks />
      <About />
    </>
  )
}

export default App
