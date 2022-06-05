import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import MoviesList from "./components/MoviesLIst";
import searchMovies from "./services/movie-API";
import { useState, useEffect } from "react";

function App() {
  //创建影片状态
  const [movies, setMovies] = useState([]);
  //创建新欢电影的状态
  const [likedMovies, setLikedMovies] = useState([]);

  //创建填充影片的useEffect（初始化）
  useEffect(() => {
    searchMovies("Fight Club").then((movies) => setMovies(movies));
  }, []);

  // //通过console查看是否找到数据
  // console.log(movies);

  const handleSearch=(query)=>{
    console.log(query);
    //与上面userEffect作用相同（搜索框改变后）
    searchMovies(query).then((movies) => setMovies(movies));
  };

  const handleToggleLikeMovie=(id)=>{
    // console.log("toggle movie",id);//通过点击找到相应的电影id
     // add or remove the movie id to likedMovies
     setLikedMovies((prevState)=>{
      if(prevState.findIndex((movieId)=>movieId===id)===-1){
        return [...prevState,id]
      }
      //如果prevState中所有电影的id，其中有与点击实践中（moviesjsx）的id对比，找到第一个相同的返回Index值，等于-1，则说明没有找到相同值，将id放入prevState
      //当不等于-1时，将prevState中movieId等于id的值剔除，相当于movieId!==id
      return prevState.filter((movieId)=>movieId!==id);
    })
    // console.log(likedMovies)
     
  }

  return (
    <div id="root">
      <Header>
        <Form searchMovies={handleSearch} />
      </Header>
      <MoviesList 
        movies={movies} 
        likedMovies={likedMovies}
        toggleLikeMovie={handleToggleLikeMovie}
      />
    </div>
  );
}

export default App;
