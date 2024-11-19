import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from '../components/NavBar'

function Movie() {
const [movie, setmovie] = useState(null)

const params = useParams()
const movieId = params.id

  useEffect(() => {
    async function fetchMovieData() {
      await fetch(`http://localhost:4000/movies/${movieId}`)
            .then((resp) => resp.json())
            .then((data) => setmovie(data))
            .catch(error => console.error(error))
    }
    fetchMovieData()
  },[movieId])

  if(movie === null) {
    return <div>Loading...</div>
  }
  
  return (
    <>
      <header>
       <NavBar />
      </header>
      <main key={movie.id}>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
        {movie.genres.map((genre) => {
          return (
            <p><span>{genre}</span></p>
          )
        })}
      </main>
    </>
  );
};

export default Movie;