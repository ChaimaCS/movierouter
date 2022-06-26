import MovieCard from './MovieCard';
import './MovieCard.css'
const MoviesList = ({ MoviesSelected }) => {
  return (
  
        <div className="container">
      <div className="row">
        {MoviesSelected.map((el,i) => (
          <MovieCard movie={el} key={i} />
        ))}
      </div>
      </div>
    
  
  );
};

export default MoviesList