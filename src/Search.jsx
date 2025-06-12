import { useEffect } from "react";
import { useState } from "react";

function Search({ searchMovie, setMovieSearch, nowPlaying, sortMovies }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const submittedData = event.target.elements.movieInput.value;
    console.log(submittedData);
    setMovieSearch(submittedData);
  };
  const [sortBy, setSortBy] = useState("");
  const sort = (e) => {
    console.log("Sort");
    setSortBy(e.target.value);
  };

  useEffect(() => {
    console.log(sortBy);
    sortMovies(sortBy);
  }, [sortBy]);

  return (
    <div className="header">
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input name="movieInput" type="text" placeholder="Search"></input>
          <button type="submit">Submit</button>
        </form>
        <button onClick={nowPlaying} type="nowplaying">
          Now Playing
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
