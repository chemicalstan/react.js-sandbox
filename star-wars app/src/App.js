import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);

  const fetchMoviesHandler = (e) => {
    e.preventDefault();
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovieList(
          data.results.map((movie) => {
            return {
              id: movie.episode_id,
              openingText: movie.opening_crawl,
              releaseDate: movie.release_date,
              title: movie.title,
            };
          })
        );
      });
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
