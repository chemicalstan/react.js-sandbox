import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);

  const fetchMoviesHandler = async (e) => {
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
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movieList} />
      </section>
    </React.Fragment>
  );
}

export default App;
