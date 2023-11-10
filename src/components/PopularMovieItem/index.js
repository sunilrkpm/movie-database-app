import {Link} from 'react-router-dom'
import './index.css'

const PopularMovieItem = props => {
  const {movieData} = props
  const {id, posterPath, voteAverage, title} = movieData

  return (
    <li className="movie-item">
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt="movie poster"
        className="movie-icon"
      />
      <div>
        <h1 className="movie-name">{title}</h1>
        <p className="rating">Rating: {voteAverage} </p>
        <Link to={`/movie-detailed/${id}`}>
          <button type="button" className="view-button">
            View Details
          </button>
        </Link>
      </div>
    </li>
  )
}

export default PopularMovieItem
