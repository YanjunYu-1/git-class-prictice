import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import MoviesList from "./components/MoviesLIst";
import searchMovies from "./services/movie-API";
import { useState, useEffect } from "react";

function App() {
  //创建影片状态
  const [movies, setMovies] = useState([]);

  //创建填充影片的useEffect
  useEffect(() => {
    searchMovies("Fight Club").then((movies) => setMovies(movies));
  }, []);

  // //通过console查看是否找到数据
  // console.log(movies);
  return (
    <div id="root">
      <Header>
        <Form />
      </Header>
      <MoviesList movies={movies} />
    </div>
  );
}

export default App;
