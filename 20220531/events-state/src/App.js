import {useState} from 'react';
import './App.css';

function App() {
  // console.log(useState());//出现两次，因为是严格模式，否则只出现一次

  let [count,setCount] = useState(0);//let是变量
  // const [count,setCount] = useState({num:60});//const是常量
  // console.log({count});

  const handleIncrement =(event) => {//手工增长
    console.log(event.target.dataset.id);
    // console.log('Click handled!');
    // ++count;//无效，数字不增加
    // setCount("haha");//点击之后，值变成haha
    // setCount(++count);
    setCount((prevState)=>prevState+5);//进阶版
  };

  const handleDecrement =(event)=>{//手工删除
    console.log(event);
    // ++count;//无效，数字不增加
    // setCount("haha");//点击之后，值变成haha
    // setCount(++count);
    setCount((prevState)=>prevState-5);//进阶版
  };

  return (
    <div className="App">
      <h1>My Count:{count}</h1>
      {/* <h1>My Count:{count.num}</h1> */}

      <button 
        data-id="111" 
        style={{backgroundColor: "red",color: "white"}}
        onClick={handleIncrement}
      >
        +
      </button>

      {/* 上面和下面两种方式都可以，注意{}内写方法名，不需要（） */}
      {/* <button onClick={()=>{console.log('Click')}}>Click Me</button> */}
      
      <button onClick={handleDecrement}>-</button>
      <div className="circle" 
      style={{
        background:'orange', 
        width:'300px', 
        height:'300px',
        borderRadius:'50%'
        }}
      ></div>
    </div>
  );
}

export default App;
