import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <section className="fixmeapp">
        <Header />
        <section className="main">       
          <ul className="repair-list">
          <li data-id="2" className="">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Car makes a funny sound</label>
              <button className="destroy"></button>
            </div>
          </li>
          <li data-id="1" className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" checked="" />
              <label>Kitchen Faucet is leaky</label>
              <button className="destroy"></button>
            </div>
          </li>
          <li data-id="0" className="">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>The vents are plugged</label>
              <button className="destroy"></button>
            </div>
          </li></ul>
        </section>
        <Footer />
      </section>   
  );
}

export default App;
