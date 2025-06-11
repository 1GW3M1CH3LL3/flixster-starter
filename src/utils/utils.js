const parseMovieData = (movieData) => {
  console.log(movieData);
  return movieData.map((data) => ({
    title: data["title"],
    release: data["release_date"],
    overview: data["overview"],
    poster: data["poster_path"],
    genre: data["genre_ids"],
    rating: data["vote_average"],
  }));
};
export { parseMovieData };
