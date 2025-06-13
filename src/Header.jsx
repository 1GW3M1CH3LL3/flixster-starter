import Search from "./Search";
function Header(props) {
  return (
    <header className="header-container">
      <h1 className="header-title">Flixter</h1>
      <Search
        nowPlaying={props.nowPlaying}
        searchMovie={props.searchMovie}
        setMovieSearch={props.setMovieSearch}
        sortMovies={props.sortMovies}
        movieSearch={props.movieSearch}
      />
    </header>
  );
}
export default Header;
