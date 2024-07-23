
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const url = `http://www.omdbapi.com/?i=${id}&apikey='1f0c37d8';`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p>Year: {movie.Year}</p>
      <p>Director: {movie.Director}</p>
      <p>Plot: {movie.Plot}</p>
      <p>IMDB Rating: {movie.imdbRating}</p>
      <Link to="/movies">Back to Search</Link>
    </div>
  );
};

export default MovieDetail;