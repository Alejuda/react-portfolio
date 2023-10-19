import {
  SiJavascript,
  SiRuby,
  SiCss3,
  SiReact,
  SiRubyonrails,
  SiTailwindcss,
  SiGoogledocs,
} from "react-icons/si";
import { BsGearWideConnected, BsLightbulb, BsCodeSlash } from "react-icons/bs";
import { RiHtml5Fill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import MyResume from '../assets/files/MyResume.pdf';

function About() {
  return (
    <section id="about" className="w-screen px-8 py-28 bg-gray_3 about">
      <div className="max-w-screen-2xl flex flex-col about-first gap-16 pb-10 w-5/6 m-auto">
        <h2 className="text-6xl whitespace-nowrap font-semibold fira-code text-primaryRed about-title">
          About me
        </h2>
        <p className="text-start max-w-2xl text-2xl about-desc font-medium tracking-wide">
          Hello I’m a software developer! I can help you build a product ,
          feature or website Look through some of my work and experience! If you
          like what you see and have a project you need coded, don’t hesitate to
          contact me.
        </p>
        <a
          href={MyResume}
          download="IgnacioFino-resume.pdf"
          className="self-start text-xl transition-all flex items-center rounded-sm gap-3 border-2 border-primaryRed whitespace-nowrap bg-primaryRed font-semibold py-3 px-5 hover:bg-red-100 hover:text-gray_2"
        >
          Get my resume <SiGoogledocs />
        </a>
        <div className="h-[2px] rounded-full bg-white w-full" />
        <div className="flex flex-col gap-7 tech-container">
          <div className="flex gap-10 tech-stack">
            <h4 className="fira-code flex items-center gap-3 text-3xl">
              <BsCodeSlash className="text-primaryRed" /> Languages
            </h4>
            <div className="flex items-center justify-start flex-1 text-3xl gap-6">
              <SiJavascript />
              <SiRuby />
              <RiHtml5Fill />
              <SiCss3 />
            </div>
          </div>
          <div className="flex gap-10 tech-stack">
            <h4 className="fira-code flex items-center gap-3 text-3xl">
              <BsGearWideConnected className="text-primaryRed" /> Frameworks
            </h4>
            <div className="flex items-center justify-start flex-1 text-4xl gap-6">
              <SiReact />
              <SiRubyonrails />
              <SiTailwindcss />
              <FaNode />
            </div>
          </div>
          <div className="flex gap-10 tech-stack">
            <h4 className="fira-code flex items-center gap-3 text-3xl">
              <BsLightbulb className="text-primaryRed" /> Skills
            </h4>
            <div className="flex items-center skills-container justify-start flex-1 text-sm flex-wrap gap-6">
              <span className="skills">Database Management</span>
              <span className="skills">Version Control</span>
              <span className="skills">CLI</span>
              <span className="skills">API Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
