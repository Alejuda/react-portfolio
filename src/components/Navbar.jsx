import EmailIcon from '@mui/icons-material/Email';

const Navbar = () => (
  <header className="flex justify-between p-4 items-center">
    <a className="flex-1 text-start" href="/">
      <h1 className="nav-logo text-3xl"><strong>Ignacio</strong> Fino</h1>
    </a>
    <ul className="flex items-center gap-10 shrink-0">
      <li><a className="nav-link text-lg" href="#">About</a></li>
      <li><a className="nav-link text-lg" href="#">Portfolio</a></li>
      <li><a className="nav-link text-lg" href="#">Contact</a></li>
    </ul>
    <div className="flex-1 flex justify-end text-2xl">
      <EmailIcon fontSize="large"/>
    </div>
  </header>
);

export default Navbar;
