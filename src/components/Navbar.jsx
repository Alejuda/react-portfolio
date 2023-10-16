import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

const Navbar = () => (
  <header className="flex justify-between nav-container w-9/12 max-w-screen-2xl m-auto items-center">
    <a className="flex-1 text-start" href="/">
      <h1 className="nav-logo text-3xl"><strong>Ignacio</strong> Fino</h1>
    </a>
    <ul className="flex items-center gap-10 shrink-0">
      <li><a className="nav-link text-lg active-link" href="#home">Home</a></li>
      <li><a className="nav-link text-lg" href="#about">About</a></li>
      <li><a className="nav-link text-lg" href="#jobs">Portfolio</a></li>
      <li><a className="nav-link text-lg" href="#contact">Contact</a></li>
    </ul>
    <div className="flex-1 flex justify-end text-2xl items-center red">
      <a className="media-link" href="#contact"><MailOutlinedIcon fontSize='large'/></a>
    </div>
  </header>
);

export default Navbar;
