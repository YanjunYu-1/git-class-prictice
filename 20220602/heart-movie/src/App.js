import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

function App() {
  // create the state the holds the movies创建保存影片的状态
  // create the useEffect that populates the movies from the API创建从API填充影片的useEffect
  return (
    <>
      <Header>
        <Form />
      </Header>
      <MovieList />
    </>
  );
}

export default App;
