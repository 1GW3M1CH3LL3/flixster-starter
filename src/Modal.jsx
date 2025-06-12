function Modal(props) {
  const modalDisplay = () => {
    props.setIsClick(false);
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <h1>{props.modalMovie.title}</h1>
        <img
          height="250px"
          width="200px"
          src={"https://image.tmdb.org/t/p/w500" + props.modalMovie.poster}
          alt="poster"
        />
        <h3>{props.modalMovie.date}</h3>
        <h4>{props.modalMovie.overview}</h4>
        <h3>{props.modalMovie.genre}</h3>
        <p>{props.modalMovie.rating}</p>
        <button onClick={modalDisplay} className="close-modal">
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
