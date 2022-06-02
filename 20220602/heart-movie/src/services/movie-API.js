import API_KEY from "../api-key";
const SEARCH_URL = `http://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`

const searchMovies=async(query)=>{
    const request=await fetch(`${SEARCH_URL}&query=${query}`);
    const response=await request.json();
    const movies=await response.results;
    return movies;
}

export default searchMovies;