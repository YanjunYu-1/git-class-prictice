import './App.css';
import { useState, useEffect} from 'react'
import getUsers from './services/usersAPI'

function App() {
  const [count,setCount]= useState(0);
  const [users,setUsers]= useState([]);
  
  // useEffect(()=>{
  //   console.log("this runs from the useEffect",count)
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response)=>response.json())
  //     .then((data)=>console.log(data))
  // },[count])

  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response)=>response.json())
  //     .then((data)=>setUsers(data))
  // },[]);

  useEffect(()=>{
    getUsers().then((data)=>setUsers(data));
  },[]);

  return (
    <div className="App">
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment Count</button>
      <ul>
        {users.map((user)=>(
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
