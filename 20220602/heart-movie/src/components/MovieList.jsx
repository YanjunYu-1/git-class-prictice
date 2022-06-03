import Movie from "./Movie";

const MovieList = ({movies}) => {
  console.log(movies);
    return ( 
        <div class="titleList">
            <div class="title">
              <h1>Movies</h1>
              <div className="titles-wrapper">
                  {movies.map((movie)=>(
                    <Movie key={movie.id} movie={movie} />
                    ))}
              </div>
            </div>
          </div>
     );
}
 
export default MovieList;