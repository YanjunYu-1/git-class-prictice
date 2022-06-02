import {useState} from 'react'

const Repair = (props) => {
    const {id,description,completed,deleteRepair,toggleRepair} = props;//toggleRepair切换修复

    const [isChecked, setIsChecked] = useState(completed);
    const handleChange =()=>{
        toggleRepair(id);
        setIsChecked(!isChecked);
    }

    // const handleClick=(event) => {
    //     console.log(event)
    //     console.log("haha")
    // }
    return (
        <li data-id={id} className={completed?"completed":""}>
            <div className="view">
                {/* <input type="text" value="some value" /> */}
                <input 
                    onClick={handleChange}
                    // onClick={()=>toggleRepair(id)} 
                    className="toggle" 
                    type="checkbox" 
                    defaultChecked={completed}
                />
                <label>{description}</label>
                <button 
                    onClick={()=>deleteRepair(id)} 
                    className="destroy"
                ></button>
            </div>
        </li>
    );
}

export default Repair;