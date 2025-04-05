

export default function Home() {
  return (
    <>
      <h1 className="text-white mt-10 text-center text-base sm:text-lg font-semibold px-4">
        Sample result below:
      </h1>

      <div className="flex justify-center mt-6 px-4">
        <div className="flex flex-col sm:flex-row sm:w-[50rem] w-full max-w-4xl bg-slate-800 rounded-lg">
          <img
            src="https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"
            alt="Pulp Fiction Poster"
            className="w-full sm:w-[20rem]"
          />

          <div className="p-4 text-white w-full">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Pulp Fiction</h2>
            <p className="text-sm sm:text-base mb-1">
              <span className="font-semibold">Year:</span> 1994-09-10
            </p>
            <p className="text-sm sm:text-base mb-1">
              <span className="font-semibold">Director:</span> Quentin Tarantino
            </p>
            <p className="text-sm sm:text-base mb-1">
              <span className="font-semibold">Rating:</span> 8.489
            </p>
            <p className="text-sm sm:text-base mt-4 text-gray-300">
              A burger-loving hitman, his philosophical partner, and a washed-up boxer intertwine in a tale of crime and redemption in LA.
            </p>
            <img src ="https://image.tmdb.org/t/p/w1280/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg" className = "w-full sm:w-[40rem]" />
          </div>
        </div>
      </div>
    </>
  );
}