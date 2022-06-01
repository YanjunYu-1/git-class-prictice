import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import RepairList from './components/RepairList'
import Form from './components/Form'

function App() {
  return (
    <section className="fixmeapp">
        <Header>
          {/* <h2>你好</h2>
          <p>Test</p> */}
          <Form />
        </Header>
        <section className="main">       
          <RepairList />
        </section>
        <Footer />
      </section>   
  );
}

export default App;
