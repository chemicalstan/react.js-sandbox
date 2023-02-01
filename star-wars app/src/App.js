import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  let content = <p>No Record Found</p>;

  if (movieList.length > 0) content = <MoviesList movies={movieList} />;
  if (movieList.length > 0) content = <MoviesList movies={movieList} />;
  if (isLoading) content = <p>Loading...</p>;
  if (isError) content = <p>{isError}</p>;

  const fetchMoviesHandler = async (e) => {
    setIsLoading(true);
    setIsError(null);
    e.preventDefault();
    try {
      const response = await fetch("https://swapi.dev/api/films/");

      if (!response.ok) throw new Error("Something Went Wrong!");

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
    } catch (error) {
      setIsError(error.message);
    }
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
