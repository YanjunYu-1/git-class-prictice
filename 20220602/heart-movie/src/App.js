import {useState, useEffect} from 'react'
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import searchMovies from "./services/movie-API";

function App() {
  // create the state the holds the movies创建保存影片的状态
  const [movies, setMovies] = useState([]);
  // create the useEffect that populates the movies from the API创建从API填充影片的useEffect
  useEffect(() =>{
    //刚开始调用请求，成功以后（.then）赋值setMovie
    searchMovies("star").then((movies) =>setMovies(movies));
  },[]);

  // console.log(movies);

  const handleSeach=(query) =>{
    searchMovies(query).then((movies) =>setMovies(movies))
  };
  
  return (
    <>
      <Header>
        <Form searchMovies={handleSeach}/>
      </Header>
      <MovieList movies={movies}/>
    </>
  );
}

export default App;
