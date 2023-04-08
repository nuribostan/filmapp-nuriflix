import React from "react";
import Header from "../components/Header";
import MainTitle from "../components/MainTitle";
import MovieCard from "../components/MovieCard";

const WacthedList = () => {
  const [wacthed, setWacthed] = React.useState(
    JSON.parse(localStorage.getItem("watchedMovies")) || []
  );

  return (
    <div>
      <Header />
      <MainTitle title="Wacthed List" />
      {wacthed.length === 0 ? (
        <p>Henüz favori film eklenmemiş.</p>
      ) : (
        <ul className="movieData">
          {wacthed.map((movie) => (
            <li key={movie.id} className="card">
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WacthedList;
