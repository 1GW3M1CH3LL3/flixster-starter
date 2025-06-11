
function MovieCard(props){
    return(
        <div className='card'>
            <img src={props.poster} alt="poster"/>
            <p>{props.moviename}</p>
            <p>{props.rating}</p>
        </div>

    )
}
export default MovieCard
