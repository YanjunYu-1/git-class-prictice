import Movie from "./Movie";

const MoviesList = ({movies}) => {
    // console.log(movies)
    return (
        <div className="titleList">
            <div className="title">
                <h1>Movies</h1>
                <div className="titles-wrapper">
                    {movies.map((movie) =>(
                        <Movie key={movie.id} movie={movie}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MoviesList;