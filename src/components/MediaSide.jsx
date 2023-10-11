import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';

const MediaSide = () => (
  <ul className="flex flex-col list-none center gap-y-5 px-4 py-5 items-center fixed left-3 media-side rounded-full shadow-lg">
    <li><a className="media-link" href="https://github.com/Alejuda" target="_blank"><GitHubIcon fontSize='large'/></a></li>
    <li><a className="media-link" href="https://www.linkedin.com/in/ignacio-fino" target="_blank"><LinkedInIcon fontSize='large'/></a></li>
    <li><a className="media-link" href="https://twitter.com/nacho_fino" target="_blank"><TwitterIcon fontSize='large'/></a></li>
    <li><a className="media-link" href="#contact"><MailOutlinedIcon fontSize='large'/></a></li>
  </ul>
);

export default MediaSide;