import React from 'react';
import './App.css';

function App() {
  const users=["Chris","Sally","Fred","Tim","Billy"];
  //此处（）和<>很重要，及时里面没有div也能显示

  return (
    <ul>
      {users.map((name,index) =>(
        <li key={index}>{name}</li>
      ))}

      {/* {users.map((name)=>(
        <li>{name}</li>
      ))} */}


      {/* {[<li>{users[0]}</li>,
      <li>{users[1]}</li>,
      <li>{users[2]}</li>,
      <li>{users[3]}</li>,
      <li>{users[4]}</li>,]} */}
    </ul>
  );
  
}

export default App;


{/* <ul>
  {[<li>{users[0]}</li>,
  <li>{users[1]}</li>,
  <li>{users[2]}</li>,
  <li>{users[3]}</li>,
  <li>{users[4]}</li>,]}
</ul> */}