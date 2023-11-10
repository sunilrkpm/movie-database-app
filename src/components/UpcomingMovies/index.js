import {Component} from 'react'
import Loader from 'react-loader-spinner'

import PopularMovieItem from '../PopularMovieItem'
import Header from '../Header'

import './index.css'

class UpcomingMovies extends Component {
  state = {upcomingMoviesList: [], isLoading: true}

  componentDidMount() {
    this.getUpcomingMoviesList()
  }

  getUpcomingMoviesList = async () => {
    const API_KEY = 'cd5ac16b2e488ddc6e4b072577b1ef1d'
    const api = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    const options = {
      method: 'GET',
    }
    const response = await fetch(api, options)
    const data = await response.json()

    const formattedData = data.results.map(each => ({
      id: each.id,
      posterPath: each.poster_path,
      title: each.title,
      voteAverage: each.vote_average,
    }))
    this.setState({upcomingMoviesList: formattedData, isLoading: false})
  }

  renderLoadingView = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderUpcomingMovies = () => {
    const {upcomingMoviesList} = this.state
    return (
      <ul className="home-list-container">
        {upcomingMoviesList.map(each => (
          <PopularMovieItem movieData={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <>
        <Header />
        <div className="home-bg">
          {isLoading ? this.renderLoadingView() : this.renderUpcomingMovies()}
        </div>
      </>
    )
  }
}

export default UpcomingMovies
