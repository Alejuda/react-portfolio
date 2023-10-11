import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from '@mui/icons-material/GitHub';

function WorkPopup({setPopup, popWork}) {

  return (
    <div className="fixed w-screen h-screen backdrop-blur-sm z-50 flex justify-center items-center">
      <div className="w-3/4 h-3/4 bg-gray_1 relative flex justify-between">
        <CloseIcon
          fontSize="large"
          className="absolute right-4 top-4 cursor-pointer"
          onClick={()=>{setPopup(false)}}
        />
        <div className="w-1/2">
          <img
            className="w-full h-full object-contain p-2 border-r-2 "
            src={popWork.image}
          />
        </div>
        <div className="w-1/2 flex flex-col gap-7 p-10">
          <h3 className="fira-code font-bold text-3xl">
            {popWork.title}
          </h3>
          <p className="font-sans text-lg font-semibold">
            {popWork.description}
          </p>
          <div className="flex items-center justify-start gap-3 flex-wrap">
            {popWork.tech_stack.map((techno, index) => (
              <span key={index} className="px-2 py-1 bg-slate-500 fira-code rounded-sm font-semibold text-sm">{techno}</span>
            ))}
          </div>
          <div className="flex gap-6 items-center justify-start mt-auto">
            <a
              href={popWork.live}
              className="transition-all flex items-center rounded-sm gap-3 border-2 border-primaryRed whitespace-nowrap bg-primaryRed font-semibold py-3 px-5 hover:bg-red-100 hover:text-gray_2"
              target="_blank"
            >
              See live <LanguageIcon />
            </a>
            <a
              href={popWork.source}
              className="transition-all flex items-center rounded-sm gap-3 border-2 border-primaryRed whitespace-nowrap bg-primaryRed font-semibold py-3 px-5 hover:bg-red-100 hover:text-gray_2"
              target="_blank"
            >
              See source <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkPopup;
