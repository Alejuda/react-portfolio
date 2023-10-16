import MeHome from '../assets/me-homepng.png'
import HomeBack from '../assets/home-back.svg'
import HomeDeco from '../assets/home-deco.svg'

function Home() {
  return (
    <section id='home' className="w-3/4 flex items-center home-section justify-between mx-auto relative">
      <div className="flex flex-col items-start gap-5 flex-auto">
        <span className="px-7 py-1 fira-code fullstack-span font-semibold rounded-md">
          Full-Stack Developer
        </span>
        <h2 className="text-5xl fira-code text-start font-semibold leading-snug">
          Hey there. <br />
          I'm Nacho!
        </h2>
        <p className="text-start max-w-lg text-xl tracking-wide">
          I can help you build a product, feature or website. look through some of my work and experience!
          If you like what you see and have a project you need coded, don't hesitate to contact me.
        </p>
      </div>
      <div className='home-back' >
      <div className="relative back-container">
        <img className='absolute z-20 h-full' src={HomeDeco} />
        <div className='absolute w-full h-full z-10 gradient-home' />
        <img className='absolute -z-20 h-full' src={HomeBack} />
      </div>
      </div>
    </section>
  );
}

export default Home;
