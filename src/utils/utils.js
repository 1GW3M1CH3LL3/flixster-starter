const parseMovieData = (movieData) => {
    
    return movieData.results?.map(data =>({
        title:  data["title"],
        poster: data["poster_path"],
        rating: data["vote_average"]
    }))
    
}
export {parseMovieData}
