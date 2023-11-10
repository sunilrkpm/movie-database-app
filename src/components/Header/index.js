import {Link} from 'react-router-dom'

import {GiFilmSpool} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'

import {BiCameraMovie, BiSearch} from 'react-icons/bi'

import './index.css'

const Header = () => (
  <>
    <nav className="web-container">
      <Link to="/" className="link">
        <h1 className="nav-heading">movieDB</h1>
      </Link>
      <ul className="nav-items-container">
        <Link to="/" className="link">
          <li className="nav-item">Popular Movies</li>
        </Link>
        <Link to="/top-rated" className="link">
          <li className="nav-item">Rated Movies</li>
        </Link>
        <Link to="/upcoming" className="link">
          <li className="nav-item">Upcoming Movies</li>
        </Link>
        <Link to="/search-movies" className="link">
          <BiSearch color="#fff" className="icons" />
        </Link>
      </ul>
    </nav>
    <nav className="mobile-container">
      <Link to="/" className="link">
        <h1 className="nav-heading">movieDB</h1>
      </Link>
      <div className="mobile-items-container">
        <Link to="/" className="link">
          <AiFillHome color="#fff" className="icons" />
        </Link>
        <Link to="/top-rated" className="link">
          <GiFilmSpool color="#fff" className="icons" />
        </Link>
        <Link to="/upcoming" className="link">
          <BiCameraMovie color="#fff" className="icons" />
        </Link>
        <Link to="/search-movies" className="link">
          <BiSearch color="#fff" className="icons" />
        </Link>
      </div>
    </nav>
  </>
)

export default Header
