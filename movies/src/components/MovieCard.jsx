import React from 'react';
import './MovieCard.css'
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const MovieCard = ({ movie:{id, name, images, description, genre, rating} }) => {
  return (
  
      <div className="col-md-3 movieStack ">
      <div className="eachMovie">
        <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src={images} className="card-img-top" style={{height: 400}} alt="movie" />
        </div><div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>{genre}</p>
          <ReactStars
                    count={5}
                    size={24}
                    Color="#ffd700"
                    value={rating}
                />
          <p>{description}</p>
          <Link to={`/MoviesDescription/${id}`}>
             <button className="card__btn">
              Trailer </button></Link>
    </div>
    </div>
      </div>
    </div>
  );
};

export default MovieCard;
