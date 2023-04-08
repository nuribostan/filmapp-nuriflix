import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import WacthedList from './pages/WacthedList';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='wacthedList' element={<WacthedList />} />
          <Route path='search' element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
