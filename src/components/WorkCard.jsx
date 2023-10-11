import todo from '../assets/todo.png'

function WorkCard({ title, description, tech }) {
  return (
    <div className="work-card group w-full flex flex-col gap-4 relative overflow-hidden hover:cursor-pointer hover:scale-105 transition-all">
      <img className='absolute h-full w-full object-cover z-10' src={todo}/>
      <div className="z-20 work-card-content w-full flex flex-col px-8 py-20 gap-4 group-hover:opacity-0 transition-opacity">
        <h3 className="text-3xl fira-code font-semibold text-start">{title}</h3>
        <p className="font-medium text-md text-start">{description}</p>
        <div className="flex items-center justify-start gap-3 flex-wrap">
          {tech.map((techno, index) => (
            <span key={index} className="px-2 py-1 bg-primaryRed  fira-code rounded-sm font-semibold text-sm">{techno}</span>
          ))}
        </div>
      </div>
      <button
        className="z-20 group-hover:opacity-100 transition-opacity absolute bottom-0 w-full opacity-0 fira-code font-bold py-2 bg-primaryRed"
        type="button"
      >
        See Project
      </button>
    </div>
  );
}

export default WorkCard;
