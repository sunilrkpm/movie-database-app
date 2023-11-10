import './index.css'

const CastDetails = props => {
  const {singleMovieData} = props
  const {profilePath, character, name} = singleMovieData

  return (
    <li className="cast-item-container">
      <img
        src={`https://image.tmdb.org/t/p/w500${profilePath}`}
        alt="cast profile"
        className="profile-image"
      />
      <div>
        <p className="cast-name">Name : {name}</p>
        <p className="character-name">Character : {character}</p>
      </div>
    </li>
  )
}

export default CastDetails
