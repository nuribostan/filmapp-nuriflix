import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import MainTitle from "../components/MainTitle";
import MovieCard from "../components/MovieCard";
import { FcSearch } from "react-icons/fc";

const Search = () => {
  const API_KEY = "9dd5785cd51769cfec7b47d6e8e17c14";
  const API_LINK =
    "https://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&query=";

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [filterRating, setFilterRating] = useState("");
  const [filterYear, setFilterYear] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(search, filterRating, filterYear);
  };

  const fetchMovies = (search, rating, year) => {
    let query = `${search}&query=${search}`;
    if (rating) {
      query += `&vote_average.gte=${rating}`;
    }
    if (year) {
      query += `&year=${year}`;
    }
    fetch(API_LINK + query)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  useEffect(() => {
    fetchMovies(search, filterRating, filterYear);
  }, [search, filterRating, filterYear]);

  return (
    <div className="searchContainer">
      <Header />
      <MainTitle title="Search" />
      <form onSubmit={handleSearch}>
        <div className="searchTopTwo">
          <input
            className="searchInput"
            placeholder="Type a movie name..."
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="searchButton" type="submit">
            <FcSearch />
          </button>
        </div>

        <div className="searchBottomTwo">
          <input
            className="ratingInput"
            placeholder="Minimum IMDB Rating"
            type="number"
            step="0.1"
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
          />
          <input
            className="yearInput"
            placeholder="Minimum Year"
            type="number"
            step="1"
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
          />
        </div>
      </form>
      <ul className="movieData">
        {movies.map((movie) => (
          <li key={movie.id} className="card">
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
