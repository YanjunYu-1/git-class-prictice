import RestaurantCard from "./RestaurantCard";

const Restaurants = (props) => {
    const {restaurants}=props;
    return (
        <ul className="container">
            {restaurants.map((restaurant, index) => {
                return (
                    <RestaurantCard
                    key={index}
                    restaurant={restaurant}

                    // //进行替代
                    // name={restaurant.name}
                    // image={restaurant.image}

                    //通过RestaurantCard调用相关数据
                    // <li key={index}>
                    //     <img src={restaurant.image} alt="" />
                    //     <h2>{restaurant.name}</h2>
                    // </li>
                />);
            })}
        </ul>

    );
}

export default Restaurants;