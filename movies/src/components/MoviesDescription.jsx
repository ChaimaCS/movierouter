import React, { useEffect, useState } from 'react';
import {Link, useParams, useNavigate } from 'react-router-dom';
import { MoviesSelected } from './MoviesSelected';


const MoviesDescription = ({MoviesSelected}) => {
    const {id}=useParams()
    const [movie, setMovie] = useState("")
  useEffect(() => {
     setMovie(MoviesSelected.find(el=> el.id==id))
   }, [id])
  return (
    <center className='bg-light'><div className="card m-5" style={{width: 800}} >
    <div className="card-img-top card-image-fence" />
    <center><iframe width="800" height="460" src={movie.trailer}  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </center>
    <div className="card-body">
      <div className="card-title" >{movie.name}</div>                                                       
      <p className="card-text">
       {movie.description}</p>
     <center> <Link to="/" > <button className="btn btn-dark">Go Back</button></Link></center>
    </div>
    </div></center>
    )}

export default MoviesDescription