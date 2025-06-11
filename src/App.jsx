import {useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";

import Search from "./Search";

const apiKey = import.meta.env.VITE_API_KEY;
function LoadMore({pageNumber, setPageNumber}){
  

    const handleButtonClick = () =>{
        setPageNumber(pageNumber++)
        console.log(pageNumber)
    }
    return <div><button onClick={handleButtonClick}>LoadMore</button></div>
}

const App = () => {
  const [movieData, setMovieData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1)
  useEffect(() =>{
    fetchMovieData();
  //   async function fetchMovieData() {
  //   const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   console.log(data)
  //   console.log(response)
  // }
  // let results = fetchMovieData()
  // setMovieData(results)

  }, [])

  async function fetchMovieData() {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${pageNumber}`;
    const response = await fetch(url);
    const data = await response.json();
    setMovieData(data);
    
  }
  
  return (
    <div className="App">
      <Search />
      <MovieList movies={movieData} />
      <LoadMore pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
};

export default App;
