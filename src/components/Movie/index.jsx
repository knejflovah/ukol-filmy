import React from 'react';
import './style.css';
import Actor from '../Actor'
import {movies} from '../../movies.js'


const Movie = ({ title, poster, year, rating, director, genre, cast }) => (

  <div className="movie">
    <h1 className="nadpis">{title}</h1>
    <img className="poster" src={`/assets/${poster}`} />
    <div className="details" >
      <p>
     <span className="span"> Rok vydání:</span>  {year} </p>
      <p>
     <span className="span"> Režie: </span> {director}
     </p>
        <p><span className="span"> Žánr: </span>{genre}</p> 

          </div>
          <h4 className = "pruh">
            {rating}
          </h4>
          <p className = "cast">
            <h6 className ="h6">V hlavních rolích:</h6>
      {cast.map((index)=>
        <Actor
          key={index.name}
          name={index.name}
          as={index.as}/>
       
   
                  )}
                  </p>





        </div>


        );


        export default Movie;