import React, { useRef, useEffect } from "react";
import AddFav from "./AddFav";
import AddWacthedList from "./AddWacthedList";

const Modal = ({ movie, closeModal }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="modal" ref={modalRef} onClick={handleModalClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="modal-body">
          <h2 className="modal-movie-title">{movie.title}</h2>
          <div className="modal-desc">
            <p className="modal-movie-overview">{movie.overview}</p>
            <div className="miniModalDesc">
              <p className="modal-movie-rating">
                Rating : {movie.vote_average}
              </p>
              <p className="modal-movie-release-date">
                Release Date :{movie.release_date}
              </p>
            </div>
          </div>

          <div className="modal-button">
            <AddFav movie={movie} />
            <AddWacthedList movie={movie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
