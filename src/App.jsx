import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import MediaSide from './components/MediaSide'
import Home from './components/Home'
import RecentWorks from './components/RecentWorks'
import About from './components/About'
import Contact from './components/Contact'
import SideMenu from './components/SideMenu'

function App() {
  const [sideMenu, setSideMenu] = useState(false)

  return (
    <>
      <Navbar setSideMenu={setSideMenu} sideMenu={sideMenu}/>
      <MediaSide />
      <Home />
      <RecentWorks />
      <About />
      <Contact />
      <SideMenu active={sideMenu} setSideMenu={setSideMenu} />
    </>
  )
}

export default App
