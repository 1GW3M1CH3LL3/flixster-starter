import { useState } from "react";

function MovieCard(props) {
  const [isLike, setIsLike] = useState(false);
  const [isWatched, setIsWatched] = useState("Add To Watched");
  const handleWatchClick = (e) => {
    e.stopPropagation();
    setIsWatched(
      isWatched === "Add To Watched" ? "Watched!" : "Add To Watched"
    );
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

    setIsLike(!isLike);
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
          // height="250px"
          // width="180px"
          src={"https://image.tmdb.org/t/p/w500" + props.poster}
          alt={props.moviename + " poster"}
        />
        <p>{props.moviename}</p>
        <p>{props.rating}</p>
      </div>

      <i
        onClick={like}
        className={`fa-solid fa-heart ${isLike ? "like" : ""}`}
      ></i>
      <button onClick={handleWatchClick} className="add-to-watched">
        {isWatched}
      </button>
    </div>
  );
}
export default MovieCard;
