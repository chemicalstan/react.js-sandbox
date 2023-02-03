import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
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
      const response = await fetch(
        "https://reactjs-sandbox-7ff49-default-rtdb.europe-west1.firebasedatabase.app/movies.json"
      );

      if (!response.ok) throw new Error("Something Went Wrong!");
      const data = await response.json(); // transform JSON to JS object
      console.log({ data });
      const loadedMovies = [];
      for (const movie in data) {
        loadedMovies.push({
          id: movie,
          openingText: data[movie].openingText,
          releaseDate: data[movie].releaseDate,
          title: data[movie].title,
        });
      }
      setMovieList(loadedMovies);
    } catch (error) {
      setIsError(error.message);
    }
    setIsLoading(false);
  }, []); // external states are added as dependencies

  const AddMovieHandler = async (movie) => {
    const response = await fetch(
      "https://reactjs-sandbox-7ff49-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  // It is important to pass the handler function as a dependecy incase it is uses on an external state
  // If we choose to add the handler function as a dependecy, useCallback should used because the component would always be
  // re-evaluated, creating an infinit loop since no two identical reference data types are thesame.
  // useCallback stores the state of a function and only permits re-evaluation when a dependency within the function changes
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={AddMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
