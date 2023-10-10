import WorkCard from "./WorkCard";

const works = [
  {
    id: 1,
    title: "To-Do List",
    description:
      "A productivity tool designed to help users manage their daily tasks and to-dos efficiently.",
    tech_stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "To-Do List",
    description:
      "A productivity tool designed to help users manage their daily tasks and to-dos efficiently.",
    tech_stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "To-Do List",
    description:
      "A productivity tool designed to help users manage their daily tasks and to-dos efficiently.",
    tech_stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    title: "To-Do List",
    description:
      "A productivity tool designed to help users manage their daily tasks and to-dos efficiently.",
    tech_stack: ["HTML", "CSS", "JavaScript"],
  },
];

const RecentWorks = () => (
  <section className="w-screen recent-works-section px-8">
    <div className="max-w-screen-2xl pb-10 w-5/6 m-auto">
      <div className="flex gap-5 items-center">
        <h2 className="text-4xl whitespace-nowrap py-10 fira-code">
          My recent works
        </h2>
        <div className="h-[1px] bg-white w-full" />
      </div>
      <div className="grid works-grid gap-10">
        {works.map((work) => (
          <WorkCard
            key={work.id}
            id={work.id}
            title={work.title}
            description={work.description}
            tech={work.tech_stack}
          />
        ))}
      </div>
    </div>
  </section>
);

export default RecentWorks;
