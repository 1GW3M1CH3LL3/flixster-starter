const apiKey = import.meta.env.VITE_API_KEY;
const genres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

const parseMovieData = (movieData) => {
  console.log("anything");
  console.log(movieData);
  return movieData.map((data) => ({
    title: data["title"],
    release: data["release_date"],
    overview: data["overview"],
    poster: data["poster_path"],
    genre: data["genre_ids"].map(
      (id) => genres.filter((item) => item.id === id)[0].name + " "
    ),
    rating: data["vote_average"],
    id: data["id"],
  }));
};

export { parseMovieData };
