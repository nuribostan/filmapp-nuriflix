import React from "react";
import MainTitle from "../components/MainTitle";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";


const Favorites = () => {
  const [favorites, setFavorites] = React.useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  return (
    <div>
      <Header />
      <MainTitle title="Favorites" />
      {favorites.length === 0 ? (
        <p>Henüz favori film eklenmemiş.</p>
      ) : (
        <ul className="movieData">
          {favorites.map((movie) => (
            <li key={movie.id} className="card">
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
