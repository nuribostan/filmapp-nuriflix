import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const MovieData = ({ API_LINK, cardClick}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_LINK)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);


  return (
    <div className="movieData">
        {movies.map((movie) => (
          <div className="card" key={movie.id}>
             <MovieCard key={movie.id} movie={movie} />
          </div>
        ))}
    </div>
  );
};

export default MovieData;
