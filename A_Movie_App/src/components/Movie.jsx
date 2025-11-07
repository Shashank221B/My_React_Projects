import React, { useEffect, useState } from "react";

const Movie = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
        );
        const data = await response.json();
        setMovies(data);
      } catch (err) {
        console.log("Error here is", err);
      }
    };
    getMovies();
  }, []);

  const filteredMovies = movies.filter((mov) =>
    mov.Title.toLowerCase().includes(searchTerm)
  );

  // limit to show only 4 movies max (so one page fits)
  const visibleMovies = filteredMovies.slice(0, 4);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center w-full">
      {visibleMovies.length > 0 ? (
        visibleMovies.map((movie, idx) => {
          const { Title, Year, Runtime, Poster } = movie;
          return (
            <div
              key={idx}
              className="border rounded-xl p-2 sm:p-3 flex flex-col items-center shadow-md hover:shadow-lg transition w-32 sm:w-36"
            >
              <img
                className="w-24 h-32 sm:w-28 sm:h-40 object-cover rounded-md"
                src={Poster}
                alt={`${Title} poster`}
              />
              <div className="mt-1 sm:mt-2 text-center">
                <p className="font-semibold text-xs sm:text-sm truncate">{`${Title.slice(0,14)}...`}</p>
                <p className="text-[10px] sm:text-xs text-gray-500">{Runtime}</p>
                <p className="text-[10px] sm:text-xs text-gray-500">{Year}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-sm sm:text-base">Loading Movies, please wait…</p>
      )}
    </div>
  );
};

export default Movie;
