
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MovieSearchApp = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    
    const url = `http://www.omdbapi.com/?s=${query}&apikey=1f0c37d8`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.Search || []);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <form onSubmit={searchMovies}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a movie title"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {movies.map(movie => (
          <div key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>Year: {movie.Year}</p>
            <Link to={`/movies/${movie.imdbID}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearchApp;