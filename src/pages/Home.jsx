import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard"

function Home() {
  const [movies, setmovies] = useState([])

  useEffect(() => {
    async function fetchMoviesData() {
      await fetch("http://localhost:4000/movies")
      .then((resp) => resp.json())
      .then((data) => setmovies(data))
      .catch((error) => console.error(error))
    }
    fetchMoviesData()
  }, [])
  const movieList = movies.map((movie) => {
    return <MovieCard key={movie.id} movie={movie}/>
  })
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
      <h1>Home Page</h1>
      {movieList}
      </main>
    </>
  );
};

export default Home;