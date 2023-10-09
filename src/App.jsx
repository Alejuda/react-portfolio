// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MediaSide from './components/MediaSide'
import Home from './components/Home'
import RecentWorks from './components/RecentWorks'

function App() {

  return (
    <>
      <Navbar />
      <MediaSide />
      <Home />
      <RecentWorks />
    </>
  )
}

export default App
