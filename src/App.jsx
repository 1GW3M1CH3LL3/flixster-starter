import { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";

import Search from "./Search";

const apiKey = import.meta.env.VITE_API_KEY;

const App = () => {
  const [movieData, setMovieData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const incrementPage = () => {
    setPageNumber((prev) => prev++);
  };
  useEffect(() => {
    console.log("effect", pageNumber, movieData);
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
  }, [pageNumber]);

  async function fetchMovieData() {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${pageNumber}`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log('b4', movieData)
    setMovieData(movieData.concat(data.results));
    // setMovieData(movieData.concat(data));

    // setMovieData((prev) => {
    // console.log('inside', prev)
    // return  prev.concat(data)});
  }

  useEffect(() => {
    console.log("page", pageNumber);
  }, [pageNumber]);

  return (
    <div className="App">
      <Search />
      <MovieList movies={movieData} />
      <LoadMore incrementPage={incrementPage} />
    </div>
  );
};

const LoadMore = ({ incrementPage }) => {
  return (
    <div>
      <button onClick={incrementPage}>LoadMore</button>
    </div>
  );
};

export default App;
