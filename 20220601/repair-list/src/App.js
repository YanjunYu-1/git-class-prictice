import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import RepairList from './components/RepairList'

function App() {
  return (
    <section className="fixmeapp">
        <Header />
        <section className="main">       
          <RepairList />
        </section>
        <Footer />
      </section>   
  );
}

export default App;
