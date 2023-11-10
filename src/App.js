import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import RatedMovies from './components/RatedMovies'
import UpcomingMovies from './components/UpcomingMovies'
import MovieDetailed from './components/MovieDetailed'
import SearchedMovies from './components/SearchedMovies'
import NotFound from './components/NotFound'

import './App.css'

// write your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/top-rated" component={RatedMovies} />
    <Route exact path="/upcoming" component={UpcomingMovies} />
    <Route exact path="/movie-detailed/:id" component={MovieDetailed} />
    <Route exact path="/search-movies" component={SearchedMovies} />
    <Route component={NotFound} />
  </Switch>
)

export default App
