import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json(); // transform JSON to JS object
    const transformedMovies = data.results.map((movie) => {
      return {
        id: movie.episode_id,
        openingText: movie.opening_crawl,
        releaseDate: movie.release_date,
        title: movie.title,
      };
    });
    setMovieList(transformedMovies);
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movieList.length > 0 && (
          <MoviesList movies={movieList} />
        )}
        {!isLoading && movieList.length === 0 && <p>No Record Found</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
