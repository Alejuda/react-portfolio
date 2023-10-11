import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from '@mui/icons-material/GitHub';

function WorkPopup({setPopup}) {

  return (
    <div className="fixed w-screen h-screen backdrop-blur-sm z-50 flex justify-center items-center">
      <div className="w-3/4 h-3/4 bg-slate-500 relative flex justify-between">
        <CloseIcon
          fontSize="large"
          className="absolute right-4 top-4 cursor-pointer"
          onClick={()=>{setPopup(false)}}
        />
        <div className="w-1/2">
          <img
            className="w-full h-full object-cover"
            src="https://th.bing.com/th/id/R.65c68b2c4b902ab028e6b7c95563928a?rik=D%2bTOPucmwHCEVA&pid=ImgRaw&r=0"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-7 text-start p-10">
          <h3 className="fira-code font-bold text-3xl">
            Titulo del trabajo realizado
          </h3>
          <p className="font-sans text-lg font-semibold">
            DESCITION Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam minima magni dicta? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Laudantium, laboriosam nobis. Non,
            nobis!
          </p>
          <div className="flex gap-6 items-center justify-start mt-auto">
            <button
              type="button"
              className="transition-all flex items-center gap-3 border-2 border-primaryRed whitespace-nowrap bg-primaryRed font-semibold py-3 px-5 hover:bg-red-200 hover:text-gray_2"
            >
              See live <LanguageIcon />
            </button>
            <button
              type="button"
              className="transition-all flex items-center gap-3 border-2 border-primaryRed whitespace-nowrap bg-primaryRed font-semibold py-3 px-5 hover:bg-red-200 hover:text-gray_2"
            >
              See source <GitHubIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkPopup;
