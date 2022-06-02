import Movie from "./Movie";

const MovieList = () => {
    return ( 
        <div class="titleList">
            <div class="title">
              <h1>Movies</h1>
              <div className="titles-wrapper">
                  <Movie />
                  <Movie />
                  <Movie />
                  <Movie />
              </div>
              
            </div>
          </div>
     );
}
 
export default MovieList;