import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './MoviesList';
import AddMovie from './AddMovie';
import './App8.css';

function App8() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  // const fectMoviesHandler = useCallback(() => {
  //   setIsLoading(true);
  //   fetch('https://swapi.dev/api/films').then(response => {
  //     console.log('sending request..')
  //     return response.json();
  //   }).then(data => {
  //     const transformedMovies = data.results.map(movie => {
  //       return {
  //         id: movie.episode_id,
  //         title: movie.title,
  //         openingText: movie.opening_crawl,
  //         releaseDate: movie.release_date
  //       };
  //     });
  //     setMovies(transformedMovies);
  //     setIsLoading(false);
  //   });
  // }, []);





  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://react-tutorial-2b442-default-rtdb.firebaseio.com/movies.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data){
        loadedMovies.push({
          id: key, 
          title : data[key].title,
          releaseDate: data[key].releaseDate,
          openingtext: data[key].openingText
        })
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
     const response = await fetch('https://react-tutorial-2b442-default-rtdb.firebaseio.com/movies.json', {
      method: "POST", 
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App8;
