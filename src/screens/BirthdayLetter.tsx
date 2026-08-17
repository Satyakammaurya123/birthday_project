function BirthdayLetter() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 px-5 py-10">

      {/* Floating hearts */}
      <div className="pointer-events-none absolute left-5 top-12 animate-pulse text-3xl">
        💗
      </div>

      <div className="pointer-events-none absolute right-7 top-20 animate-pulse text-2xl">
        ✨
      </div>

      <div className="pointer-events-none absolute bottom-24 left-8 animate-pulse text-2xl">
        💕
      </div>

      <div className="pointer-events-none absolute bottom-12 right-8 animate-pulse text-3xl">
        💖
      </div>

      <div className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 text-xl animate-pulse">
        ✨
      </div>

      {/* Letter card */}
      <div className="relative w-full max-w-md rounded-[2rem] border border-white/60 bg-white/70 px-6 py-8 shadow-2xl backdrop-blur-md">

        {/* Small decoration */}
        <div className="mb-5 text-center text-3xl">
          💖
        </div>

        {/* Title */}
        <h1 className="text-center font-serif text-3xl font-bold text-rose-600">
          Happy Birthday
        </h1>

        <p className="mt-2 text-center text-lg italic text-rose-400">
          My Dear Nidhi ✨
        </p>

        {/* Divider */}
        <div className="mx-auto my-6 flex items-center justify-center gap-2">
          <span className="h-px w-12 bg-rose-300" />
          <span className="text-sm">💕</span>
          <span className="h-px w-12 bg-rose-300" />
        </div>

        {/* Letter */}
        <div className="font-serif text-[17px] leading-8 text-gray-700">

          <p>
            Happy Birthday, my dear Nidhi. ❤️
          </p>

          <p className="mt-5">
            I tried my best to make your birthday more special.
          </p>

          <p className="mt-5">
            It is our first birthday and I am promising to make
            your every next birthday better than this one.
          </p>

          <p className="mt-5">
            Once again, Happy Birthday my cutie pie. 🥰
          </p>

          <p className="mt-5">
            It's your Day, so <span className="font-bold text-rose-500">ENJOY!!</span> it fully. ❤️
          </p>

        </div>

        {/* Ending */}
        <div className="mt-8 text-center">

          <p className="font-serif text-lg italic text-rose-500">
            With all my love,
          </p>

          <div className="mt-3 text-3xl animate-pulse">
            ❤️
          </div>

          <p className="mt-2 text-xs tracking-widest text-rose-300">
            HAPPY BIRTHDAY MY SPECIAL ONE 
          </p>

        </div>

      </div>
    </section>
  );
}

export default BirthdayLetter;