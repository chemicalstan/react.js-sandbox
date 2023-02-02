import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  let content = <p>No Record Found</p>;

  if (movieList.length > 0) content = <MoviesList movies={movieList} />;
  if (isLoading) content = <p>Loading...</p>;
  if (isError) content = <p>{isError}</p>;

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setIsError(null);
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
  }, []); // external states are added as dependencies

  // It is important to pass the handler function as a dependecy incase it is uses on an external state
  // If we choose to add the handler function as a dependecy, useCallback should used because the component would always be
  // re-evaluated, creating an infinit loop since no two identical reference data types are thesame.
  // useCallback stores the state of a function and only permits re-evaluation when a dependency within the function changes
  useEffect(() => {
    console.log("effect");
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

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
