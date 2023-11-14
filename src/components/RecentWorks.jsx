import WorkCard from "./WorkCard";
import WorkPopup from "./WorkPopup";
import { useState } from "react";

const works = [
  {
    id: 0,
    title: "Luxury Speedsters",
    description:
      "The \"Luxury Speedsters\" app offers users a glimpse into the future of automotive luxury. It utilizes Ruby on Rails for a strong backend foundation and React for an easy-to-use frontend interface.",
    tech_stack: ["Ruby on Rails", "React", "Redux", "TailwindCSS", "PostgreSQL"],
    image: "https://i.postimg.cc/zf6BJyj7/luxury.jpg",
    live: "https://rentals-app-egry.onrender.com/",
    source: "https://github.com/Luiscarlosvd/futuristic-transportation",
    warn: true,
  },
  {
    id: 1,
    title: "CategorEASE",
    description:
      "CategorEASE is a comprehensive mobile web application designed to simplify expense tracking and budget management for individuals and households. It provides users with a user-friendly platform to efficiently categorize, monitor, and analyze their expenses, helping them make informed financial decisions.",
    tech_stack: ["Ruby", "Ruby on Rails","CSS","PostgreSQL"],
    image: "https://i.postimg.cc/XvpqSfwX/Categorease.jpg",
    live: "https://categorease.onrender.com/",
    source: "https://github.com/Alejuda/CategorEASE",
    warn: true,
  },
  {
    id: 2,
    title: "Crypto Pro",
    description:
      "User-friendly web application designed to provide real-time data and basic information about various cryptocurrencies. By fetching data from an API, Crypto Pro displays a comprehensive list of cryptocurrencies, allowing users to explore and stay updated on the latest trends in the crypto market.",
    tech_stack: ["React", "Redux", "API"],
    image: "https://i.postimg.cc/sxRghbbZ/crypto-pro.jpg",
    live: "https://crypto-pro-umkp.onrender.com/",
    source: "https://github.com/Alejuda/crypto-pro",
    warn: false,
  },
  {
    id: 3,
    title: "Photographer Portfolio",
    description:
      "Professional photographer's official website, a captivating showcase of breathtaking photography sessions and stunning images. Explore the portfolio, book a session, and immerse yourself in the artistry of photography.",
    tech_stack: ["JavaScript", "Webpack", "HTML", "CSS"],
    image: "https://i.postimg.cc/NBGHt2RR/lucas-portfolio.png",
    live: "https://alejuda.github.io/Lucas-Portfolio",
    source: "https://github.com/Alejuda/Lucas-Portfolio",
    warn: false,
  },
  {
    id: 4,
    title: "To-Do List",
    description:
      "This project allows users to create, edit, and remove tasks from their lists with ease. In addition, users can select and remove completed tasks with a single click, simplifying their workflow and helping them stay on top of their tasks.",
    tech_stack: ["HTML", "CSS", "JavaScript"],
    image: "https://i.postimg.cc/rFHZ8c4j/todo.jpg",
    live: "https://alejuda.github.io/TODO-List/dist/",
    source: "https://github.com/Alejuda/TODO-List",
    warn: false,
  },
];

const RecentWorks = () => {
  const [popup, setPopup] = useState(false);
  const [popWork, setPopWork] = useState(0);

  return (
    <>
      <section id="jobs" className="w-screen recent-works-section px-8">
        <div className="max-w-screen-2xl pb-10 w-5/6 m-auto">
          <div className="flex gap-5 items-center">
            <h2 className="text-4xl whitespace-nowrap font-semibold py-10 fira-code section-title">
              My recent works
            </h2>
            <div className="h-[1px] bg-white w-full section-title-line" />
          </div>
          <div className="grid works-grid gap-10">
            {works.map((work) => (
              <WorkCard
                key={work.id}
                id={work.id}
                title={work.title}
                description={work.description}
                tech={work.tech_stack}
                image={work.image}
                setPopup={setPopup}
                setPopWork={setPopWork}
              />
            ))}
          </div>
        </div>
      </section>
      {popup && <WorkPopup popWork={works[popWork]} setPopup={setPopup} />}
    </>
  );
};

export default RecentWorks;
