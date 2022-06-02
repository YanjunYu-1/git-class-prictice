const TableBody = (props) => {
    //向App要数据
    const {userName,job,removed} = props
    return ( 
        <div>
            <table>
                <tr>
                    <td>{userName}</td>
                    <td>{job}</td>
                    <td><button>Delete</button></td>
                </tr>
            </table>
        </div>
     );
}
 
export default TableBody;