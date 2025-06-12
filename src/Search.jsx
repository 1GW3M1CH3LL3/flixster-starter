function Search({ searchMovie, setMovieSearch, nowPlaying }) {
  const handleSubmit = (event) => {
    console.log("i see u");
    event.preventDefault();
    const submittedData = event.target.elements.movieInput.value;
    console.log(submittedData);
    setMovieSearch(submittedData);
  };

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
        <select name="sort" id="sort">
          <option value="">Sort By:</option>
          <option value="AZ">Alphabetical(A-Z)</option>
          <option value="date">Date Released</option>
          <option value="vote">Vote</option>
        </select>
      </div>
    </div>
  );
}
export default Search;
