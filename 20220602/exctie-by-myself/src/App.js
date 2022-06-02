import './App.css';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import {useState} from 'react'

function App() {
  //初始化状态
  const initialState=[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'睡觉',done:false},
    {id:'003',name:'打代码',done:true},
  ]

  const [todo,setTodo]= useState(initialState)
  return (
    <div className="todo-container">
    <div className="todo-wrap">
      <Header />
      <List todo={todo}/>
      <Footer />
    </div>
  </div>
  );
}

export default App;
