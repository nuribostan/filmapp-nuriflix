import React, { useState, useEffect } from 'react';
import { RxCounterClockwiseClock } from "react-icons/rx";
import { TbRotateClockwise2 } from "react-icons/tb";

const AddWatchList = ({ movie }) => {
  const [isMovieWatched, setIsMovieWatched] = useState(false); // İzlendi durumunu tutan state

  useEffect(() => {
    // Component render edildiğinde veya modal açıldığında izlenen film kontrolü yap
    const watchedMovies = JSON.parse(localStorage.getItem('watchedMovies')) || [];
    const existingMovie = watchedMovies.find(watchedMovie => watchedMovie.id === movie.id);
    setIsMovieWatched(existingMovie !== undefined);
  }, [movie.id]); // movie.id değiştiğinde useEffect'i tekrar çalıştır

  const handleToggleWatched = () => {
    // İzlenen filmleri local storage'den al
    const watchedMovies = JSON.parse(localStorage.getItem('watchedMovies')) || [];

    // Eklemeye çalışılan filmi izlenen filmler listesinde kontrol et
    const existingMovieIndex = watchedMovies.findIndex(watchedMovie => watchedMovie.id === movie.id);

    // Eğer film zaten izlenen filmler listesinde bulunuyorsa, izlenenlerden çıkar
    if (existingMovieIndex !== -1) {
      watchedMovies.splice(existingMovieIndex, 1);
      localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
      setIsMovieWatched(false); // İzlendi durumunu güncelle
    } else {
      // İzlenen filmlere eklemeyi gerçekleştir
      const updatedWatchedMovies = [...watchedMovies, movie];
      localStorage.setItem('watchedMovies', JSON.stringify(updatedWatchedMovies));
      setIsMovieWatched(true); // İzlendi durumunu güncelle
    }
  };

  return (
    <div>
      <button className='addWatchList' onClick={handleToggleWatched}>
        {isMovieWatched ? <TbRotateClockwise2 /> : <RxCounterClockwiseClock />}
      </button>
    </div>
  );
};

export default AddWatchList;
