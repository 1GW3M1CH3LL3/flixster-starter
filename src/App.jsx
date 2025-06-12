import { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import Search from "./Search";
import Modal from "./Modal";
import Header from "./Header";

const apiKey = import.meta.env.VITE_API_KEY;

const App = () => {
  const [movieData, setMovieData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [movieSearch, setMovieSearch] = useState("");
  const [now_playing, setNow_playing] = useState([]);
  const [modalMovie, setModalMovie] = useState({});
  const [isClick, setIsClick] = useState(false);

  const displayNowPlaying = () => {
    console.log("you");
    setMovieData(now_playing);
  };

  const sortMovies = (option) => {
    const movies = movieData;
    if (option === "AZ") {
      console.log(option);
      movies.sort((a, b) => a.title.localeCompare(b.title));
      console.log(movies);
      setMovieData(movies);
    } else {
      console.log("in");
    }
  };
  // const sort = document.getElementById("sort");
  // sort.addEventListener("change", ()=>{
  //   if(sort.value === "AZ"){
  //     playlists.sort((a,b) => a.playlist_name.localeCompare(b.playlist_name))
  //     displayPlaylist()

  // }else if(sort.value === "ZA"){
  //   playlists.sort((a,b) => b.playlist_name.localeCompare(a.playlist_name))
  //   displayPlaylist()
  // }
  // else if(sort.value == "likes"){
  //   playlists.sort((a,b) => b.likes - a.likes)
  //   displayPlaylist()
  // }

  // })
  let handleDataSubmit = async (newData) => {
    fetchMovieSearch();
    console.log(fetchMovieSearch());
  };
  useEffect(() => {
    fetchMovieSearch();
  }, [movieSearch]);
  useEffect(() => {
    fetchMovieData();

    //   async function fetchMovieData() {
    //   const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&query=${encodeURIComponent(searchInput)}`
    //   const response = await fetch(url)
    //   const data = await response.json()
    //   console.log(data)
    //   console.log(response)
    // }
    // let results = fetchMovieData()
    // setMovieData(results)
  }, [pageNumber]);

  async function fetchMovieSearch() {
    console.log(movieSearch);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieSearch}&page=${pageNumber};`;
    const response = await fetch(url);
    const data = await response.json();
    setMovieData(data.results);
    console.log(data.results);
  }
  async function fetchMovieData() {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${pageNumber}`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log('b4', movieData)
    setMovieData(movieData.concat(data.results));
    setNow_playing(data.results);
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
      <Header
        className="header-container"
        nowPlaying={displayNowPlaying}
        searchMovie={handleDataSubmit}
        setMovieSearch={setMovieSearch}
        sortMovies={sortMovies}
      />
      {/* <Search
        nowPlaying={displayNowPlaying}
        searchMovie={handleDataSubmit}
        setMovieSearch={setMovieSearch}
      /> */}
      <MovieList
        setIsClick={setIsClick}
        setModalMovie={setModalMovie}
        movies={movieData}
      />
      <LoadMore pageNumber={pageNumber} setPageNumber={setPageNumber} />
      {isClick === true && (
        <Modal setIsClick={setIsClick} modalMovie={modalMovie} />
      )}
    </div>
  );
};

const LoadMore = ({ pageNumber, setPageNumber }) => {
  const handleButtonClick = () => {
    setPageNumber(pageNumber + 1);

    console.log("onclick", pageNumber);
  };
  return (
    <div>
      <button onClick={handleButtonClick}>LoadMore</button>
    </div>
  );
};

export default App;
