import React, { useState, useEffect } from 'react';
import { FaHeart} from "react-icons/fa";
import { IoMdHeartDislike } from "react-icons/io";
const AddFav = ({ movie }) => {
  const [isMovieFavorited, setIsMovieFavorited] = useState(false); // Favori durumunu tutan state

  useEffect(() => {
    // Component render edildiğinde veya modal açıldığında favori film kontrolü yap
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const existingMovie = favorites.find(favMovie => favMovie.id === movie.id);
    setIsMovieFavorited(existingMovie !== undefined);
  }, [movie.id]); // movie.id değiştiğinde useEffect'i tekrar çalıştır

  const handleToggleFavorite = () => {
    // Favori filmleri local storage'den al
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Eklemeye çalışılan filmi favori filmler listesinde kontrol et
    const existingMovieIndex = favorites.findIndex(favMovie => favMovie.id === movie.id);

    // Eğer film zaten favori filmler listesinde bulunuyorsa, favoriden çıkar
    if (existingMovieIndex !== -1) {
      favorites.splice(existingMovieIndex, 1);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsMovieFavorited(false); // Favori durumunu güncelle
    } else {
      // Favori filmlere eklemeyi gerçekleştir
      const updatedFavorites = [...favorites, movie];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsMovieFavorited(true); // Favori durumunu güncelle
    }
  };

  return (
    <div>
      <button className='addFavorite' onClick={handleToggleFavorite}>
        {isMovieFavorited ? <IoMdHeartDislike /> : <FaHeart />}
      </button>
    </div>
  );
};

export default AddFav;
