import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://react-http-43548-default-rtdb.firebaseio.com/movies.json');

      console.log(response.data);
      if (response.status !== 200) {
        throw new Error('Something went wrong!');
      };

      const loadedMovies = [];
      for (const key in response.data) {
        loadedMovies.push({
          id: key,
          title: response.data[key].title,
          openingText: response.data[key].openingText,
          releaseDate: response.data[key].releaseDate
        });
      };

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    };
    setIsLoading(false);
  }, []);

  const  postMovieHandler = async (movie) => {
    try {
      const response = await axios.post('https://react-http-43548-default-rtdb.firebaseio.com/movies.json', movie);
    } catch (error) {
      setError(error.message);
    };
    getMoviesHandler();
  };

  let content = <p>Found no movies.</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  };
  if (error) {
    content = <p>{error}</p>;
  };
  if (isLoading) {
    content = <p>Loading...</p>;
  };

  useEffect(() => {
    getMoviesHandler();
  }, [getMoviesHandler]);

  return (
    <React.Fragment>
       <section>
        <AddMovie onAddMovie={postMovieHandler} />
      </section>
      <section>
        <button onClick={getMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
