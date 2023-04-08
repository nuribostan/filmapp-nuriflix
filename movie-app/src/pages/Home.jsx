import React from 'react'
import MovieData from '../data/MovieData'
import Header from '../components/Header'
import MovieCard from '../components/MovieCard'
import MainTitle from '../components/MainTitle'

const Home = () => {
  return (
    <div className='container'>
        <Header />
        <MainTitle title="Trending" />
        <MovieData API_LINK={"https://api.themoviedb.org/3/trending/all/day?api_key=9dd5785cd51769cfec7b47d6e8e17c14"} cardClick={MovieCard}/>
    </div>
  )
}

export default Home