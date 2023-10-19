import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';

function SideMenu({ active }) {
  return (
    <div
      className={
        active
          ? "h-screen fixed side-bar z-30 left-0 transition-all flex flex-col justify-between"
          : "h-screen fixed side-bar z-30 -left-full transition-all flex flex-col justify-between"
      }
    >
      <ul className="flex flex-col px-20 mt-40 justify-center items-center gap-10 shrink-0">
        <li>
          <a className="nav-link text-3xl" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link text-3xl" href="#jobs">
            Portfolio
          </a>
        </li>
        <li>
          <a className="nav-link text-3xl" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="nav-link text-3xl" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <ul className="flex justify-around border-t w-full border-white px-4 py-5 items-center">
        <li><a className="media-link" href="https://github.com/Alejuda" target="_blank"><GitHubIcon fontSize='large'/></a></li>
        <li><a className="media-link" href="https://www.linkedin.com/in/ignacio-fino" target="_blank"><LinkedInIcon fontSize='large'/></a></li>
        <li><a className="media-link" href="https://twitter.com/nacho_fino" target="_blank"><TwitterIcon fontSize='large'/></a></li>
        <li><a className="media-link" href="#contact"><MailOutlinedIcon fontSize='large'/></a></li>
      </ul>
    </div>
  );
}

export default SideMenu;
