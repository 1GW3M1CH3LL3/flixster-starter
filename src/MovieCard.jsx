import { useState } from "react";

function MovieCard(props) {
  const [isLike, setIsLike] = useState(false);
  const modalObject = {
    poster: props.poster,
    title: props.moviename,
    overview: props.overview,
    date: props.date,
    genre: props.genre,
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
      <img
        // height="250px"
        width="180px"
        src={"https://image.tmdb.org/t/p/w500" + props.poster}
        alt="poster"
      />
      <p>{props.moviename}</p>
      <p>{props.rating}</p>
      <i
        onClick={like}
        className={`fa-solid fa-heart ${isLike ? "like" : ""}`}
      ></i>
    </div>
  );
}
export default MovieCard;
