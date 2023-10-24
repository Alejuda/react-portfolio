import HomeBack from '../assets/home-back.svg'
import HomeDeco from '../assets/home-deco.svg'
import HomeMe from '../assets/me-homepng.jpg'

function Home() {
  return (
    <section id='home' className="w-3/4 flex items-center home-section justify-between mx-auto relative overflow-hidden">
      <div className="flex flex-col items-start gap-5 home-desc flex-auto">
        <span className="px-7 py-1 fira-code fullstack-span font-semibold rounded-md">
          Full-Stack Developer
        </span>
        <h2 className="home-hey text-5xl fira-code text-start font-semibold leading-snug">
          Hey there. <br />
          I'm Nacho!
        </h2>
        <p className="text-start max-w-lg text-xl tracking-wide">
          A web developer living in Cordoba, Argentina.<br />
          I am passionate about web development and eager to contribute to exciting projects.
          Look through some of my work and experience! <br />
          If you’re interested in my work and have a project that requires coding, please feel free to contact me. I’d be happy to help!
        </p>
      </div>
      <div className='home-back' >
        <div className="relative back-container">
          <img className='absolute z-20 h-full' src={HomeDeco} />
          <div className='absolute w-full h-full z-10 gradient-home' />
          <img className='absolute -z-20 h-full' src={HomeBack} />
        </div>
      </div>
      <img className='mb-5 hidden phone-me rounded-2xl shadow-md' src={HomeMe} alt='image of ignacio'/>
    </section>
  );
}

export default Home;
