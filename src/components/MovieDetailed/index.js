import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {AiFillLike} from 'react-icons/ai'
import Header from '../Header'
import CastDetails from '../CastDetails'

import './index.css'

class MovieDetailed extends Component {
  state = {
    singleMovieList: [],
    genresList: [],
    castMoviesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getMovieDetailedList()
  }

  getMovieDetailedList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const MOVIE_ID = id

    const API_KEY = 'cd5ac16b2e488ddc6e4b072577b1ef1d'
    const api = `https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=${API_KEY}&language=en-US`
    const options = {
      method: 'GET',
    }
    const response = await fetch(api, options)
    const data = await response.json()

    const formattedData = {
      id: data.id,
      posterPath: data.poster_path,
      title: data.title,
      voteAverage: data.vote_average,
      releaseDate: data.release_date,
      overview: data.overview,
      runtime: data.runtime,
    }
    const genres = data.genres.map(each => ({
      name: each.name,
      id: each.id,
    }))
    const result = genres.map(each => ({
      name: each.name,
      id: each.id,
    }))

    const api2 = `https://api.themoviedb.org/3/movie/${MOVIE_ID}/credits?api_key=${API_KEY}&language=en-US`
    const options2 = {
      method: 'GET',
    }
    const response2 = await fetch(api2, options2)
    const data2 = await response2.json()
    console.log(data2)
    const formattedData2 = data2.cast.map(each => ({
      id: each.id,
      profilePath: each.profile_path,
      character: each.character,
      name: each.name,
    }))
    console.log(formattedData2)

    this.setState({
      singleMovieList: formattedData,
      genresList: result,
      castMoviesList: formattedData2,
      isLoading: false,
    })
  }

  renderLoadingView = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderMovieDetails = () => {
    const {singleMovieList, castMoviesList, genresList} = this.state
    const {
      posterPath,
      voteAverage,
      releaseDate,
      overview,
      title,
      runtime,
    } = singleMovieList

    const duration = runtime / 60
    const hoursAndMinutes = `${Math.floor(duration)}h ${runtime % 60}m .`

    return (
      <>
        <h1>Movie Details</h1>
        <div className="home-bg single-movie-container">
          <div className="image-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${posterPath}`}
              alt="movie poster"
              className="single-movie-icon"
            />
            <p className="release-date">Release Date {releaseDate}</p>
          </div>
          <div className="movie-content-container">
            <h1 className="movie-title">{title}</h1>
            <div className="rating-container">
              <AiFillLike color="#44D923" className="like-icon" />
              <p className="movie-rating">{`${voteAverage} K`} </p>
            </div>
            <ul className="genre-container">
              <p className="runtime">{hoursAndMinutes}</p>
              {genresList.map(each => (
                <li
                  className="genre-list-item"
                  key={each.id}
                >{` ${each.name}, `}</li>
              ))}
            </ul>
            <p className="overview">{overview}</p>
          </div>
        </div>
        <h1>Cast Details</h1>
        <ul className="cast-container">
          {castMoviesList.map(each => (
            <CastDetails singleMovieData={each} key={each.id} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        <Header />
        {isLoading ? this.renderLoadingView() : this.renderMovieDetails()}
      </>
    )
  }
}

export default MovieDetailed
