import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './components/Header';
import Movie from './components/Movie';
import MovieList from './components/MovieList';
import {movies} from  './movies.js';



const App = () => (
  <>
  <div className="container">
    <Header/>
   
    
    <MovieList movies={movies}/>
    </div>
  </>
);

render(<App />, document.querySelector('#app'));
