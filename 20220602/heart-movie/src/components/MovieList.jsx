import Movie from "./Movie";

const MovieList = ({movies,likeMovies,toggleLikeMovie}) => {
  // console.log(movies);
    return ( 
        <div className="titleList">
            <div className="title">
              <h1>Movies</h1>
              <div className="titles-wrapper">
                  {movies.map((movie)=>(
                    <Movie 
                      key={movie.id} 
                      movie={movie} 
                      liked={
                        // 此处原本可以写一个方法进行传递，只是省略了这一步
                        likeMovies.findIndex(
                          (likeMovieId)=>movie.id===likeMovieId
                        )===-1
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
 
export default MovieList;