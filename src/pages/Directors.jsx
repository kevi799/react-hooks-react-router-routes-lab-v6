import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
const [directorsDetails, setdirectorsDetails] = useState([])

  useEffect(() => {
    async function fetchDirectorsData() {
      await fetch("http://localhost:4000/directors")
      .then((resp) => resp.json())
      .then((data) => {
        setdirectorsDetails(data)})
      .catch((error) => console.error(error))
    }
    fetchDirectorsData()
  }, [])

  const directorsDisplay = directorsDetails.map((directorsDetail) => {
    return (
      <article key={directorsDetail.id}>
        <h2>{directorsDetail.name}</h2>
        <ul>{directorsDetail.movies.map((moviee, index) => {
          return(<li key={index}>{moviee}</li>)
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
        <h1>Directors Page</h1>
        {directorsDisplay}     
      </main>
    </>
  );
};

export default Directors;