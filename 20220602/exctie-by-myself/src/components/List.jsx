import Item from "./Item";

const List = (props) => {
    const {todo}=props;
    console.log(todo);
    return (
        <ul className="todo-main">
            {todo.map((todo) =>(
                <Item 
                key={todo.id} 
                {...todo}/>
            ))}
        </ul>
    );
}

export default List;