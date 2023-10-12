import {
  SiJavascript,
  SiRuby,
  SiCss3,
  SiReact,
  SiRubyonrails,
  SiTailwindcss,
  SiGoogledocs,
} from "react-icons/si";
import { BsGearWideConnected, BsLightbulb, BsCodeSlash } from 'react-icons/bs'
import { RiHtml5Fill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";

function About() {
  return (
    <section className="w-screen px-8 py-32 bg-gray_3">
      <div className="max-w-screen-2xl flex flex-col gap-20 pb-10 w-5/6 m-auto">
        <h2 className="text-5xl whitespace-nowrap font-semibold fira-code text-primaryRed">
          About me
        </h2>
        <p className="text-start max-w-xl text-xl font-medium tracking-wide">
          Hello I’m a software developer! I can help you build a product ,
          feature or website Look through some of my work and experience! If you
          like what you see and have a project you need coded, don’t hesitate to
          contact me.
        </p>
        <a
          href=""
          className="self-start transition-all flex items-center rounded-sm gap-3 border-2 border-primaryRed whitespace-nowrap bg-primaryRed font-semibold py-3 px-5 hover:bg-red-100 hover:text-gray_2"
        >
          Get my resume <SiGoogledocs />
        </a>
        <div className="h-[1px] bg-white w-full" />
        <div className="flex flex-col gap-7">
          <div className="flex gap-10 ">
          <h4 className="fira-code flex items-center gap-3 text-2xl"><BsCodeSlash className="text-primaryRed"/> Languages</h4>
            <div className="flex items-center justify-start flex-1 text-3xl gap-6">
              <SiJavascript />
              <SiRuby />
              <RiHtml5Fill />
              <SiCss3 />
            </div>
          </div>
          <div className="flex gap-10 ">
          <h4 className="fira-code flex items-center gap-3 text-2xl"><BsGearWideConnected className="text-primaryRed"/> Frameworks</h4>
            <div className="flex items-center justify-start flex-1 text-4xl gap-6">
              <SiReact />
              <SiRubyonrails />
              <SiTailwindcss />
              <FaNode />
            </div>
          </div>
          <div className="flex gap-10 ">
            <h4 className="fira-code flex items-center gap-3 text-2xl"><BsLightbulb className="text-primaryRed"/> Skills</h4>
            <div className="flex items-center justify-start flex-1 text-sm flex-wrap gap-6">
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
