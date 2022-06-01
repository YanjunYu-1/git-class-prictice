const RestaurantCard=({restaurant})=>{
  const {cost,cuisines,description,image,name,rating}=restaurant;
    return (
      <li>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{cuisines.join(",")}</p>
        <p>{rating}</p>
        <p>{cost}</p>
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
