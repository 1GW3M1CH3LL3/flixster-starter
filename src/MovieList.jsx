import MovieCard from "./MovieCard";
// import data from './data/data.js'
import { parseMovieData } from "./utils/utils";

function MovieList(props) {
  if (!props.movies) {
    return null;
  }
  // console.log(props)
  const parsedData = parseMovieData(props.movies);
  // console.log(parsedData);
  return (
    <div className="movie-list">
      {" "}
      {parsedData?.map((movie) => {
        return (
          <MovieCard
            key={movie.title}
            poster={movie.poster}
            moviename={movie.title}
            rating={movie.rating}
          />
        );
      })}
    </div>
  );
}
export default MovieList;
