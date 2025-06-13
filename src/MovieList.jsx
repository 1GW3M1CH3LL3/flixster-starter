import MovieCard from "./MovieCard";

import { parseMovieData } from "./utils/utils";

function MovieList(props) {
  if (!props.movies) {
    return null;
  }

  const parsedData = parseMovieData(props.movies);
  console.log(parsedData);
  return (
    <div className="movie-list">
      {" "}
      {parsedData?.map((movie) => {
        return (
          <MovieCard
            setIsClick={props.setIsClick}
            setModalMovie={props.setModalMovie}
            id={movie.id}
            poster={movie.poster}
            moviename={movie.title}
            rating={movie.rating}
            date={movie.release}
            overview={movie.overview}
            genre={movie.genre}
          />
        );
      })}
    </div>
  );
}
export default MovieList;
