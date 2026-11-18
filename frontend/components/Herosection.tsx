const Hero = ()=>{
    return(
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-6 inline-flex rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-sm text-teal-300">
            Your Smart Learning Companion
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Learn Smarter with
            <span className="text-teal-400"> EduMind</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Ask questions, explore concepts and prepare for exams
            with your personal AI learning assistant.
          </p>
        </div>
    );
}

export default Hero;