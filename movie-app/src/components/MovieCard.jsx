import React from "react";
import { useState, useEffect, useRef } from "react";
import Modal from "./Modal";

const MovieCard = ({ movie }) => {
  
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };


  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        onClick={handleModalOpen}
      />
      {isModalOpen  && (
        <Modal movie={movie} closeModal={handleModalClose} /> 
      )}
    </div>
  );
};

export default MovieCard;
