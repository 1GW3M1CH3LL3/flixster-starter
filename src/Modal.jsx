function Modal(props) {
  return (
    <div>
      <p>{props.moviename}</p>
      <img
        height="250px"
        width="200px"
        src={"https://image.tmdb.org/t/p/w500" + props.poster}
        alt="poster"
      />
      <p>{props.date}</p>
      <p>{props.overvieww}</p>

      <p>{props.rating}</p>
      <button>Close</button>
    </div>
  );
}

export default Modal;
