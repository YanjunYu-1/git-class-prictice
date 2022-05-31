import React from 'react';
import './App.css';
import RestaurantCard from './components/RestaurantCard';
//import {RestaurantCard} from './components/RestaurantCard';//第二种方法



function App() {
  const restaurants=[
    {
      name: "Sushi Cushi",
      cuisines: ["japanese", "sushi"],
      cost: "$$",
      rating: 4.2,
      image: "https://b.zmtcdn.com/data/pictures/5/16672015/93de5f2a82a805d440be85f8063d28ef_featured_v2.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eos doloribus animi quam corrupti temporibus veniam, similique labore, nemo laborum in quae porro!",
    },
    {
      name: `Segovia Tapas Bar and Restaurant`,
      cuisines: ["tapas", "international"],
      cost: "$$$",
      rating: 4.8,
      image: "https://b.zmtcdn.com/data/pictures/9/16672239/33baace611abe86a230df4eb4591257e_featured_v2.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, id officiis saepe aliquid necessitatibus cupiditate?",
    },
    {
      name: `Mrs. Mike's`,
      cuisines: ["burger", "fast food"],
      cost: "$$",
      rating: 3.9,
      image: "https://b.zmtcdn.com/data/pictures/6/16671976/5ce988edbe1d9ae856e16d651cdef957_featured_v2.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, repellat.",
    },
    {
      name: `Bridge Drive-In`,
      cuisines: ["ice cream", "dessert"],
      cost: "$",
      rating: 4.1,
      image: "https://b.zmtcdn.com/data/pictures/1/16671861/939d04953aaa54cbe80f44ab1911c0dd_featured_v2.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eos doloribus animi quam corrupti temporibus veniam, similique labore, nemo laborum in quae porro!",
    },
    {
      name: `Jade Chopstix`,
      cuisines: ["chinese", "international"],
      cost: "$$",
      rating: 4.5,
      image: "https://b.zmtcdn.com/data/pictures/2/16672672/cc54fd3ef20b00e642cebf7483fff767_featured_v2.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, repellat.",
    },
    {
      name: `Montana's`,
      cuisines: ["Casual Dining", "Bar"],
      cost: "$$",
      rating: 2.8,
      image: "https://b.zmtcdn.com/data/pictures/chains/7/8900197/c57f3cf8a1e00fbf2251d2c0609b8e08_featured_v2.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, id officiis saepe aliquid necessitatibus cupiditate?",
    },
    {
      name: `KAZOKU Restaurant`,
      cuisines: ["japanese", "sushi"],
      cost: "$$$",
      rating: 1.7,
      image: "https://b.zmtcdn.com/data/pictures/3/16672963/d93911429ccf6176797263c88b4d4025_featured_v2.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eos doloribus animi quam corrupti temporibus veniam, similique labore, nemo laborum in quae porro!",
    },
    {
      name: `Harman's Cafe`,
      cuisines: ["african", "coffe & tea"],
      cost: "$$",
      rating: 4.7,
      image: "https://b.zmtcdn.com/data/pictures/8/16672318/4fc7063e26c113841d37348b917f18d5_featured_v2.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, id officiis saepe aliquid necessitatibus cupiditate?",
    },
    {
      name: `Sevala's Deli`,
      cuisines: ["quick bites", "ukrainian"],
      cost: "$$",
      rating: 3.1,
      image: "https://b.zmtcdn.com/data/pictures/6/16672996/5f0ecdb95f907ec5e4336dd6ba90f947_featured_v2.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, repellat.",
    },
  ];
  return (
    <ul className="container">
      {restaurants.map((restaurant,index) =>{
        return (
          <li key={index}>
            <img src={restaurant.image} alt=""/>
            <h2>{restaurant.name}</h2>
          </li>
        );
      })}
    </ul>
  );
  
}

export default App;