const Repair = (props) => {
    const {id,description,completed,deleteRepair,toggleRepair} = props;//toggleRepair切换修复

    // const handleClick=(event) => {
    //     console.log(event)
    //     console.log("haha")
    // }
    return (
        <li data-id={id} className={completed?"completed":""}>
            <div className="view">
                <input 
                    onClick={()=>toggleRepair(id)} 
                    className="toggle" 
                    type="checkbox" 
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