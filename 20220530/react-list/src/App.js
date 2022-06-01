import React from 'react';
import './App.css';
import RestaurantCard from './components/RestaurantCard';
//import {RestaurantCard} from './components/RestaurantCard';//第二种方法
import Header from './components/Header';
import Restaurants from './components/Restaurants';
import Footer from './components/Footer';
import {restaurants} from './data';


function App() {
  return (
    <>
      <Header />
      <Restaurants restaurants={restaurants} />
      <Footer />
    </>
  );
}

export default App;