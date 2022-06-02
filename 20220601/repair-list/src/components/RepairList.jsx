import Repair from "./Repair";

const RepairList = (props) => {//修复列表
    //第二种展示方法
    const {repairs,deleteRepair,toggleRepair} = props;

    return (
        <ul className="repair-list">
            {repairs.map((repair)=>(
                <Repair 
                key={repair.id}
                id={repair.id}
                description={repair.description}
                completed={repair.completed}
                deleteRepair={deleteRepair}
                toggleRepair={toggleRepair}
                />
            ))}
            {/* 第一种展示方法
            <Repair id={1} description="car make a funny sound" component={true} />
            <Repair id={1} description="car make a funny sound" component={true} /> */}
        </ul>
    );
}

export default RepairList;