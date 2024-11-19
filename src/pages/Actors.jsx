import { useEffect, useState } from "react";
import NavBar from '../components/NavBar'

function Actors() {

  const [actors, setactors] = useState([])
  useEffect(() => {
    async function fetchActorData() {
      await fetch("http://localhost:4000/actors")
            .then((resp) => resp.json())
            .then((data) => setactors(data))
    }
    fetchActorData()
  }, [])

  const actorsList = actors.map((actor) => {
    return (
      <article>
      <h2>{actor.name}</h2>
      <ul>{actor.movies.map((movie) => {
        return (
          <li>{movie}</li>
        )
      })}</ul>
      </article>
    )
  })
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
         {actorsList}
      </main>
    </>
  );
};

export default Actors;