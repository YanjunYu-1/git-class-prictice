import placeholder from '../images/placeholder.jpg'


const Movie = ({movie,liked,toggleLikeMovie}) => {
    // console.log(movie)//检查是否得到movies
    const {id,title,vote_average,overview,poster_path}=movie

    const handleClick=(event) => {
        // console.log(event.target)
        // console.log(event.target.value)
        // console.log(id)
        toggleLikeMovie(id)
    }

    return (
        <div className="movie">
            <img
                src={
                    poster_path === null
                    ? placeholder
                    :`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt="Movie poster"
            />
            <div className="overlay">
                <div className="title">{title}</div>
                <div className="rating">{vote_average}/10</div>
                <div className="plot">{overview}</div>
                <div data-toggled={liked} className="listToggle">
                    <div onClick={handleClick}>
                        <i className="far fa-heart"></i>
                        <i className="fas fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movie;