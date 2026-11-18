const Navbar = ()  =>{

    return(
        <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 font-bold text-slate-950">
              E
            </div>

            <span className="text-xl font-bold">
              Edu<span className="text-teal-400">Mind</span>
            </span>
          </div>

          <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-xs font-medium text-teal-300">
            AI Learning Assistant
          </span>
        </nav>
      </header>
    );

}

export default Navbar;