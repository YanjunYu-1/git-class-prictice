const API_KEY="98c449f0cb1986bc3644e7d02ded8e81"

const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`

const searchMovies=async(query) => {
    const request= await fetch(`${SEARCH_URL}&query=${query}`)
    const response=await request.json()
    const movies= await response.results;
}