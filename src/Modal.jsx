import { useState } from "react";
import { useEffect } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

function Modal(props) {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [runtime, setRunTime] = useState();
  useEffect(() => {
    fetchTrailer(props.modalMovie.id);
    fetchAdditionalDetails(props.modalMovie.id);
  }, []);
  function convertToHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes}m`;
  }

  const modalDisplay = () => {
    props.setIsClick(false);
  };
  async function fetchTrailer(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setTrailerUrl("https://www.youtube.com/embed/" + data["results"][0].key);
  }
  async function fetchAdditionalDetails(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.runtime);
    setRunTime(data.runtime);
  }
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
        <h4>{convertToHoursAndMinutes(runtime)}</h4>
        <h3>{props.modalMovie.genre}</h3>
        <p>{props.modalMovie.rating}</p>
        <div>
          <iframe className="trailer" src={trailerUrl}></iframe>
        </div>
        <button onClick={modalDisplay} className="close-modal">
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
