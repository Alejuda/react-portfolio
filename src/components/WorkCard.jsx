function WorkCard({id, title, description, tech, image, setPopWork, setPopup }) {
  return (
    <div className="work-card group w-full flex flex-col gap-4 relative overflow-hidden hover:cursor-pointer">
      <img className='absolute h-full w-full object-cover z-10' src={image}/>
      <div className="z-20 work-card-content w-full flex flex-col px-8 py-20 gap-4 group-hover:opacity-0 transition-opacity min-h-full">
        <h3 className="text-3xl fira-code font-semibold text-start">{title}</h3>
        <p className="font-medium text-md text-start">{description.length > 200 ? `${description.slice(0, 200)}...` : description}</p>
        <div className="flex items-center justify-start gap-3 flex-wrap">
          {tech.length <= 3 && tech.map((techno, index) => (
            <span key={index} className="px-2 py-1 bg-slate-500 fira-code rounded-sm font-semibold text-sm">{techno}</span>
          ))}
          {
            tech.length > 3 && tech.slice(0,2).map((techno, index) => (
              <span key={index} className="px-2 py-1 bg-slate-500 fira-code rounded-sm font-semibold text-sm">{techno}</span>
            ))
          }
          {
            tech.length > 3 && <span className="px-2 py-1 bg-slate-500 fira-code rounded-sm font-semibold text-sm">...</span>
          }
        </div>
      </div>
      <button
        className="z-20 group-hover:opacity-100 transition-opacity absolute border-2 border-primaryRed bottom-0 w-full opacity-0 fira-code font-bold py-2 bg-primaryRed hover:bg-red-100 hover:text-gray_2"
        type="button"
        onClick={() => {
          setPopWork(id);
          setPopup(true);
        }}
      >
        See Project
      </button>
    </div>
  );
}

export default WorkCard;
