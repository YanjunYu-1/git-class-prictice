const Circle = ({number,color,deleteCircle}) => {

    const handleClick = (event) => {
        const id = event.target.dataset.id;
        deleteCircle(id);
    }
    return (
        <div onClick={handleClick} className='circle' style={{backgroundColor:color}}>
            {number}
        </div>
    );
}
 
export default Circle;