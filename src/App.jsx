import { useState, useEffect } from "react";
import "./App.css";
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
  const [likedMovies, setLikedMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);

  const displayNowPlaying = () => {
    setMovieData(now_playing);
  };

  const sortMovies = (option) => {
    const movies = [...movieData];
    if (option === "AZ") {
      console.log(option);
      movies.sort((a, b) => a.title.localeCompare(b.title));
      setMovieData(movies);
      console.log(movieData);
    } else if (option === "vote-highest") {
      movies.sort((a, b) => b.vote_average - a.vote_average);
      setMovieData(movies);
      console.log(movieData);
    } else if (option === "date") {
      movies.sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );
      setMovieData(movies);
      console.log(movieData);
    } else if (option === "vote-lowest") {
      movies.sort((a, b) => a.vote_average - b.vote_average);
      setMovieData(movies);
      console.log(movieData);
    }
  };

  let handleDataSubmit = async (newData) => {
    fetchMovieSearch();
    console.log(fetchMovieSearch());
  };
  useEffect(() => {
    if (movieSearch === "") {
      displayNowPlaying();
    } else {
      fetchMovieSearch();
    }
  }, [movieSearch]);
  useEffect(() => {
    fetchMovieData();
  }, [pageNumber]);

  async function fetchMovieSearch() {
    console.log(movieSearch);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieSearch};`;
    const response = await fetch(url);
    const data = await response.json();
    setMovieData(data.results);
    console.log(data.results);
  }

  const getTrailerkey = (trailerDetails) => {
    for (let i of trailerDetails) {
      console.log(i);
      return i["key"];
    }
  };
  async function fetchMovieData() {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${pageNumber}`;
    const response = await fetch(url);
    const data = await response.json();

    setMovieData(movieData.concat(data.results));
    setNow_playing(now_playing.concat(data.results));
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
        movieSearch={movieSearch}
      />

      <main>
        <MovieList
          setIsClick={setIsClick}
          setModalMovie={setModalMovie}
          movies={movieData}
          setLikedMovies={setLikedMovies}
          likedMovies={likedMovies}
          setWatchedMovies={setWatchedMovies}
          watchedMovies={watchedMovies}
        />
        <LoadMore pageNumber={pageNumber} setPageNumber={setPageNumber} />
        {isClick === true && (
          <Modal setIsClick={setIsClick} modalMovie={modalMovie} />
        )}
      </main>
      <footer>
        <p>
          Powered by{" "}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TMDB
          </a>
        </p>
        <p>© 2025 Flixter. All rights reserved.</p>
      </footer>
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
