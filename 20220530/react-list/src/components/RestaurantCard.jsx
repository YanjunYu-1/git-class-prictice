const RestaurantCard=(props)=>{
    return (
      <li>
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
      </li>
    )
}

export default RestaurantCard;


//第二种方法
// export const RestaurantCard=(props)=>{
//     return (
//       <li>
//         <img src={props.image} alt={props.name} />
//         <h2>{props.name}</h2>
//       </li>
//     )
// }
