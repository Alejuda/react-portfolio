import { HiMenu } from 'react-icons/hi';
import { useState, useEffect } from 'react'

const Navbar = ({sideMenu, setSideMenu }) => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <div className='sticky top-0 bg-gray_2 z-50'>
    <header className="flex justify-between nav-container w-9/12 max-w-screen-2xl m-auto items-center">
      <a className="flex-1 text-start" href="/">
        <h1 className="nav-logo text-3xl"><strong>Ignacio</strong> Fino</h1>
      </a>
      <ul className="flex items-center gap-10 shrink-0 nav-list">
        <li><a className={(scrollTop >= 0 && scrollTop <= 673) ? "nav-link text-lg active-link" : "nav-link text-lg"} href="#home">Home</a></li>
        <li><a className={(scrollTop > 673 && scrollTop <= 1402) ? "nav-link text-lg active-link" : "nav-link text-lg"} href="#jobs">Portfolio</a></li>
        <li><a className={(scrollTop > 1402 && scrollTop <= 1970) ? "nav-link text-lg active-link" : "nav-link text-lg"} href="#about">About</a></li>
        <li><a className={(scrollTop > 1970) ? "nav-link text-lg active-link" : "nav-link text-lg"} href="#contact">Contact</a></li>
      </ul>
      <div className="flex-1 flex justify-end text-2xl items-center red contact-nav-button">
        <a className="contact-button text-gray_3 bg-primaryRed rounded-md relative h-9" href="#contact">
        <span className='text-base px-5 relative top-0 left-0 z-20 font-semibold'>Contact me!</span>
        </a>
      </div>
        <button className="show-menu text-gray_3 hidden bg-primaryRed fixed -left-2 top-4 p-3 rounded-r-full" onClick={() => {setSideMenu(!sideMenu)}}>
          <HiMenu className='text-3xl'/>
        </button>
    </header>
    </div>
  )
}

export default Navbar;
