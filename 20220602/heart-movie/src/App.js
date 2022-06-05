import {useState, useEffect} from 'react'
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import searchMovies from "./services/movie-API";

function App() {
  // create the state the holds the movies创建保存影片的状态
  const [movies, setMovies] = useState([]);
  const [likeMovies, setLikeMovies] = useState([]);

  // create the useEffect that populates the movies from the API创建从API填充影片的useEffect
  useEffect(() =>{
    //刚开始调用请求，成功以后（.then）赋值setMovie
    searchMovies("star").then((movies) =>setMovies(movies));
  },[]);

  // console.log(movies);

  const handleSeach=(query) =>{
    searchMovies(query).then((movies) =>setMovies(movies))
  };

  const handleToggleLikeMovie=(id)=>{
    console.log("toggle movie",id)
    // add or remove the movie id to likedMovies
    // const movieIndex=prevState.findIndex(id);//找到点击后电影的Id
    setLikeMovies((prevState)=>{
      if(prevState.findIndex((movieId)=>movieId===id)===-1){
        return [...prevState,id]
      }

      return prevState.filter((movieId)=>movieId !==id);
    })
    console.log(likeMovies)
    // console.log(setLikeMovies)
  }
  
  return (
    <>
      <Header>
        <Form searchMovies={handleSeach}/>
      </Header>
      <MovieList 
        movies={movies} 
        likeMovies={likeMovies}
        toggleLikeMovie={handleToggleLikeMovie}
      />
    </>
  );
}

export default App;
