import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import DBWarn from "./DBWarn";

function WorkPopup({ setPopup, popWork }) {
  return (
    <div className="fixed w-screen h-screen backdrop-blur-sm p-16 z-50 flex justify-center items-center shadow popup-back">
      <div className="h-full bg-gray_1 relative flex flex-col gap-4 justify-between popup-container overflow-x-auto">
        <CloseIcon
          fontSize="large"
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => {
            setPopup(false);
          }}
        />
        <div className="w-full flex flex-col gap-4 pt-6 px-10 title-proj-cont">
          <h3 className="fira-code font-bold text-4xl proj-title">{popWork.title}</h3>
          <div className="flex items-center justify-start gap-3 flex-wrap">
            {popWork.tech_stack.map((techno, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-slate-500 fira-code rounded-sm font-semibold text-sm"
              >
                {techno}
              </span>
            ))}
          </div>
        </div>
        <div className="popup-second-cont flex flex-1 h-4/6">
          <div className="w-1/2 popup-img-container overflow-hidden popup-second-cont-img">
            <img
              className="w-full h-full object-contain p-2 border-r-2 "
              src={popWork.image}
            />
          </div>
          <div className="w-1/2 flex flex-col gap-7 p-10 popup-second-cont-desc">
            <p className="font-sans text-lg popup-proj-desc font-semibold">
              {popWork.description}
            </p>
            {popWork.warn && <DBWarn />}
            <div
              className={
                !popWork.warn
                  ? "flex gap-6 items-center justify-start mt-auto"
                  : "flex gap-6 items-center justify-start"
              }
            >
              <a
                href={popWork.live}
                className="project-button transition-all flex items-center rounded-sm gap-3 border-2 border-primaryRed whitespace-nowrap bg-primaryRed font-semibold py-3 px-5 hover:bg-red-100 hover:text-gray_2"
                target="_blank"
              >
                See live <LanguageIcon />
              </a>
              <a
                href={popWork.source}
                className="project-button transition-all flex items-center rounded-sm gap-3 border-2 border-primaryRed whitespace-nowrap bg-primaryRed font-semibold py-3 px-5 hover:bg-red-100 hover:text-gray_2"
                target="_blank"
              >
                See source <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkPopup;
