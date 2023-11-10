import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {BiSearch} from 'react-icons/bi'
import Header from '../Header'
import PopularMovieItem from '../PopularMovieItem'

import './index.css'

class SearchedMovies extends Component {
  state = {searchedMoviesList: [], searchInput: '', isLoading: true}

  componentDidMount() {
    this.getSearchedMovies()
  }

  getSearchedMovies = async () => {
    const {searchInput} = this.state
    const MOVIE_NAME = {searchInput}
    const API_KEY = 'cd5ac16b2e488ddc6e4b072577b1ef1d'

    const api = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${MOVIE_NAME}&page=1`
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
    this.setState({searchedMoviesList: formattedData, isLoading: false})
  }

  onChangeSearchResult = event => {
    this.setState({searchInput: event.target.value}, this.getSearchedMovies)
  }

  renderLoadingView = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderResult = () => {
    const {searchedMoviesList, searchInput} = this.state
    const filteredList = searchedMoviesList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <ul className="home-list-container">
        {filteredList.map(each => (
          <PopularMovieItem movieData={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        <div>
          <Header />
          <div className="search-input-container">
            <div className="search-container">
              <input
                type="search"
                className="search-input"
                placeholder="Search your movies"
                onChange={this.onChangeSearchResult}
              />
              <BiSearch color="#fff" className="search-icons" />
            </div>
          </div>
        </div>
        <div className="searched-list-container">
          {isLoading ? this.renderLoadingView() : this.renderResult()}
        </div>
      </>
    )
  }
}

export default SearchedMovies
