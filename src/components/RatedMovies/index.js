import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import PopularMovieItem from '../PopularMovieItem'
import './index.css'

class RatedMovies extends Component {
  state = {ratedMoviesList: [], isLoading: true}

  componentDidMount() {
    this.getTopMoviesList()
  }

  getTopMoviesList = async () => {
    const API_KEY = 'cd5ac16b2e488ddc6e4b072577b1ef1d'
    const api = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    const options = {
      method: 'GET',
    }
    const response = await fetch(api, options)
    const data = await response.json()
    console.log(data)

    const formattedData = data.results.map(each => ({
      id: each.id,
      posterPath: each.poster_path,
      title: each.title,
      voteAverage: each.vote_average,
    }))
    this.setState({ratedMoviesList: formattedData, isLoading: false})
  }

  renderLoadingView = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderRatedMovies = () => {
    const {ratedMoviesList} = this.state
    return (
      <ul className="home-list-container">
        {ratedMoviesList.map(each => (
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
          {isLoading ? this.renderLoadingView() : this.renderRatedMovies()}
        </div>
      </>
    )
  }
}

export default RatedMovies
