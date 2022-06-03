import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import MoviesList from './components/MoviesLIst';

function App() {
  return (
    <div id="root">
      <Header>
        <Form />
      </Header>
      <MoviesList />
    </div>
  );
}

export default App;
