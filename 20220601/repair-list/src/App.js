import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RepairList from "./components/RepairList";
import Form from "./components/Form";

function App() {
  const initialState = [
    { id: 1, description: "car make a funny sound", completed: true },
    { id: 2, description: "window is browen", completed: false },
    { id: 3, description: "bick has a flat tire", completed: true },
  ];

  const [repairs, setRepairs] = useState(initialState);
  
  //此方法添加项目
  const handleAddRepair=(description)=>{
    const id=+(Math.random()+100).toFixed(4);
    // console.log(description);
    setRepairs((prevState)=>[
      { id:id, description:description,completed:false},
      ...prevState,
    ]);

    // //下面方法是错的
    // setRepairs(prevState=>{
    //   return prevState.push({ 
    //     id:id, 
    //     description:description,
    //     completed:false
    //   });
    // });
  };

  //此方法用于删除项目
  const handleDeleteRepair=(id)=>{
    // console.log("delete pair",id);
    // console.log(typeof id)
    setRepairs((prevState)=>prevState.filter((repair)=>repair.id !== +id))
  }

  const handleToggleRepair=(id)=>{
    // copy the array to a new array复制数组到一个新的数组
    // find the index of the item that has the passed in id找到传递id的项的索引
    // toggle the completed status切换完成状态
    // return the new array返回新数组

    // console.log("toggle repair called",id)
    setRepairs((prevState)=>{
      const newRepairs =[...prevState];
      const itemIndex = newRepairs.findIndex((repair)=>repair.id===+id);
      newRepairs[itemIndex] ={
        ...newRepairs[itemIndex],
        completed:!newRepairs[itemIndex].completed,
      }
      return newRepairs;
      // //因为StrictMode不能实现
      // newRepairs[itemIndex].completed=!newRepairs[itemIndex].completed;
      // return [prevState];
    })
  }

  return (
    <section className="fixmeapp">
      <Header>
        {/* <h2>你好</h2>
          <p>Test</p> */}
        <Form addRepair={handleAddRepair}/>
      </Header>

      <section className="main">
        <RepairList 
        repairs={repairs} 
        deleteRepair={handleDeleteRepair} 
        toggleRepair={handleToggleRepair}
      />
      </section>

      <Footer />
    </section>
  );
}

export default App;
