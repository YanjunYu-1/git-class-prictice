const Repair = (props) => {
    const {id,description,completed,deleteRepair}=props;

    // const handleClick=(event) => {
    //     console.log(event)
    //     console.log("haha")
    // }
    return (
        <li data-id={id} className={completed?"completed":""}>
            <div className="view">
                <input className="toggle" type="checkbox" />
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