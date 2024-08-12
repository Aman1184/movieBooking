import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieHub from './MovieHub';
import TrendingMovies from './TrendingMovies';
import AboutUs from './AboutUs'; // Import the AboutUs component

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <MovieHub/>
    <TrendingMovies/>
    <Router>
      <Routes>
        <Route path="/about" component={AboutUs} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
