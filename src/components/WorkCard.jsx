function WorkCard({ title, description, tech }) {
  return (
    <div className="w-full flex flex-col gap-4 p-5">
      <h3 className="text-2xl fira-code font-bold text-start">{title}</h3>
      <p className="font-semibold text-start">{description}</p>
      <div className="flex items-center justify-start gap-3">
        {tech.map((techno) => (
          <span className="px-2 py-1 border rounded-md">{techno}</span>
        ))}
      </div>
    </div>
  );
}

export default WorkCard;
