import Search from "./Search";
function Header(props) {
  return (
    <div className="header-container">
      <h1 className="header-title">Flixter</h1>
      <Search
        nowPlaying={props.nowPlaying}
        searchMovie={props.searchMovie}
        setMovieSearch={props.setMovieSearch}
        sortMovies={props.sortMovies}
      />
    </div>
  );
}
export default Header;
