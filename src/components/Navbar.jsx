import { HiMenu } from 'react-icons/hi';

const Navbar = ({sideMenu, setSideMenu }) => (
  <header className="flex justify-between nav-container w-9/12 max-w-screen-2xl m-auto items-center">
    <a className="flex-1 text-start" href="/">
      <h1 className="nav-logo text-3xl"><strong>Ignacio</strong> Fino</h1>
    </a>
    <ul className="flex items-center gap-10 shrink-0 nav-list">
      <li><a className="nav-link text-lg active-link" href="#home">Home</a></li>
      <li><a className="nav-link text-lg" href="#about">About</a></li>
      <li><a className="nav-link text-lg" href="#jobs">Portfolio</a></li>
      <li><a className="nav-link text-lg" href="#contact">Contact</a></li>
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
);

export default Navbar;
