import { useState } from "react";

function MovieCard(props) {
  const isWatched = props.watchedMovies[props.id] || false;
  const isLiked = props.likedMovies[props.id] || false;
  // const [isWatched, setIsWatched] = useState("Add To Watched");
  const handleWatchClick = (e) => {
    e.stopPropagation();
    props.setWatchedMovies((prev) => ({
      ...prev,
      [props.id]: !prev[props.id],
    }));
  };
  const modalObject = {
    poster: props.poster,
    title: props.moviename,
    overview: props.overview,
    date: props.date,
    genre: props.genre,
    id: props.id,
  };
  const like = (e) => {
    e.stopPropagation();

    props.setLikedMovies((prev) => ({
      ...prev,
      [props.id]: !prev[props.id],
    }));
  };
  const modalDisplay = () => {
    props.setIsClick(true);

    props.setModalMovie(modalObject);
  };

  return (
    <div onClick={modalDisplay} className="card">
      <div className="name-rating">
        <img
          className="movie-image"
          src={"https://image.tmdb.org/t/p/w500" + props.poster}
          alt={props.moviename + " poster"}
        />
        <p>{props.moviename}</p>
        <p>{props.rating}</p>
      </div>

      <i
        onClick={like}
        className={`fa-solid fa-heart ${isLiked ? "like" : ""}`}
      ></i>
      <button onClick={handleWatchClick} className="add-to-watched">
        {isWatched ? "Watched!" : "Add to Watched"}
      </button>
    </div>
  );
}
export default MovieCard;
