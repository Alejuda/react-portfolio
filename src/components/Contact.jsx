function About() {
  return (
    <section className="w-screen px-8 py-32">
      <div className="max-w-screen-2xl pb-10 w-5/6 py-10 m-auto flex gap-20">
        
        <h2 className="text-5xl font-semibold fira-code max-w-[40%]">
          I'm always interested in hearing about new projects, so if you'd like
          to chat please get in touch.
        </h2>
        <form
          action="https://formspree.io/f/xbjezjap"
          method="post"
          className="flex flex-col w-full justify-start gap-6 fira-code text-white"
        >
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Full name"
            required
          />
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
          <textarea
            className="form-input"
            name="content"
            required
            placeholder="Write me something..."
            maxLength="500"
          ></textarea>
          <button
            type="submit"
            className="text-lg self-start transition-all rounded-sm border-2 border-primaryRed whitespace-nowrap bg-primaryRed font-semibold py-2 px-5 hover:bg-red-100 hover:text-gray_2"
          >
            Get in touch
          </button>
        </form>
      </div>
    </section>
  );
}

export default About;
