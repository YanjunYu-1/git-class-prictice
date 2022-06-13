import Movie from "./Movie";

const MoviesList = ({ movies, toggleLikeMovie, likedMovies }) => {
    // console.log(movies)
    return (
        <div className="titleList">
            <div className="title">
                <h1>Movies</h1>
                <div className="titles-wrapper">
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            movie={movie}
                            liked={
                                likedMovies.findIndex(
                                    (likedMovies) => movie.id === likedMovies
                                ) === -1
                                    ? false
                                    : true
                            }
                            toggleLikeMovie={toggleLikeMovie}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MoviesList;