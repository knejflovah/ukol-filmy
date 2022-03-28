import React from 'react';
import './style.css';
import Movie from '../Movie';



const MovieList = ({movies}) => (
  <>
  

  <> 
  <div className="products">
      {movies.map(item  =>
        <Movie
          key={item.title}
          title={item.title}
          poster={item.poster}
          year={item.year}
          rating= {`${item.rating} / 10`} 
          director={item.director}
          genre={item.genre} 
          cast={item.cast}
                 
          
        />
      
      )}
        </div>
      </>

  </>
);

export default MovieList;