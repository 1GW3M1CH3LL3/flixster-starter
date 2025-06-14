import { useEffect } from "react";
import { useState } from "react";

function Search({
  searchMovie,
  setMovieSearch,
  nowPlaying,
  sortMovies,
  movieSearch,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const submittedData = event.target.elements.movieInput.value;

    setMovieSearch(submittedData);
  };
  const clear = (event) => {
    setMovieSearch("");
  };
  const [sortBy, setSortBy] = useState("");
  const sort = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    sortMovies(sortBy);
  }, [sortBy]);

  return (
    <div className="header">
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            name="movieInput"
            type="text"
            value={movieSearch}
            placeholder="Search"
            onChange={(e) => setMovieSearch(e.target.value)}
          ></input>
          <button type="submit">Submit</button>
        </form>
        <button onClick={clear} type="nowplaying">
          Clear
        </button>
      </div>

      <div>
        <select onChange={sort} value={sortBy} name="sort" id="sort">
          <option value="">Sort By:</option>
          <option value="AZ">Alphabetical(A-Z)</option>
          <option value="date">Date Released</option>
          <option value="vote-highest">Vote(Highest)</option>
          <option value="vote-lowest">Vote(Lowest)</option>
        </select>
      </div>
    </div>
  );
}
export default Search;
