import Repair from "./Repair";
const RepairList = () => {//修复列表
    //第二种展示方法
    const repair=[
        {id:1, description:"car make a funny sound", completed:true},//completed完成
        {id:2, description:"window is browen", completed:false},
        {id:3, description:"bick has a flat tire", completed:true},
    ];

    return (
        <ul className="repair-list">
            {repair.map((repair)=>(
                <Repair 
                key={repair.id}
                id={repair.id}
                description={repair.description}
                completed={repair.completed}
                />
            ))}
            {/* 第一种展示方法
            <Repair id={1} description="car make a funny sound" component={true} />
            <Repair id={1} description="car make a funny sound" component={true} /> */}
        </ul>
    );
}

export default RepairList;