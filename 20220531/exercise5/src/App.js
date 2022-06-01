
import './App.css';
import {randomColor,randomNumber} from './utils'
import {useState} from 'react';
import Circle from './components/Circle'



function App() {
  const [circles,setCircles]=useState([]);

  const handleClick=()=> {
    setCircles((prevState)=>{
      return [...prevState,{color:randomColor(),number:randomNumber()}];
    })
    console.log(circles);
  }

  const handleDelete=()=> (id)=>{
    setCircles((prevState)=>{
      return prevState.filter((circles)=>circles.number != +id)
    })
  }

  return (
    <div className="app">
      <button onClick={handleClick}>Create Circle</button>
      <div className="circles">
        {circles.map((cirle,index) =>(
          <Circle 
            key={index} 
            number={cirle.number} 
            color={cirle.color} 
            deleteCircle={handleDelete}/>
        ))}
      </div>
    </div>
  );
}

export default App;
