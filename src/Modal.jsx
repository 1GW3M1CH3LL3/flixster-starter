function Modal(props) {
  const modalDisplay = () => {
    props.setIsClick(false);
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{props.modalMovie.title}</p>
        <img
          height="250px"
          width="200px"
          src={"https://image.tmdb.org/t/p/w500" + props.modalMovie.poster}
          alt="poster"
        />
        <p>{props.modalMovie.date}</p>
        <p>{props.modalMovie.overview}</p>
        <p>{props.modalMovie.genre}</p>
        <p>{props.modalMovie.rating}</p>
        <button onClick={modalDisplay} className="close-modal">
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
