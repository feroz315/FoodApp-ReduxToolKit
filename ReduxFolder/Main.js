import React,{ useEffect } from 'react';
import { useDispatch } from 'react-redux';
import StackNavigation from '../Screens/AppNavigator';
import { addMyProducts } from './HomeSlics';
import { addMyBurger } from './BurgerSlics';


const Products = [   
  
    {
     id: 1,
     name: "Margherita",
     price: 75 ,
     pics: require('../Images/farmhouse.jpg'),
     description: "Classic delight with 100% real mozzarella cheese",
     rating: 4.7,
     title: "1 pound oats",
     qty: 0,
     
   },
   {
     id: 2,  
     name: "Farmhouse",
     price: 80,
     pics: require('../Images/margherita.jpg'),
     description: "Delightful combination of onion, capsicum, tomato & grilled mushroom",
     rating: 4.1,
     qty: 0,
     title: "6 cucumber",
   },
   {
     id: 3,
     name: "Veggie Paradise",
     price: 45 ,
     description:
       "The awesome foursSome! Golden corn, black olives, capsicum, red paprika",
     pics: require('../Images/veggie_paradise.jpg'),
     rating: 3.7,
     qty: 0,
     title: "3 pound oats",
   },
   {
    id: 4,
    name: "Chicken Golden",
    price: 35,
    pics: require('../Images/chicken_golden_delight.jpg'),
    description:
      "Golden corn and extra cheese, true delight",
    rating: 4.4,
    qty: 0,
    title: "4 pound chumbar",
  },
  {
    id: 5,
    name: "Chicken Pepperoni",
    price: 70,
    pics: require('../Images/cheesepepperoni.jpg'),
    description:
      "Delectable flavor of Chicken Pepperoni",
      rating: 3.9,
    qty: 0,
    title: "2 eggs",

  },
  {
    id: 6,
    name: "Chicken Tikka",
    price: 95,
    pics: require('../Images/IndianTandooriChickenTikka.jpg'),
    description:
      "The wholesome flavour of tandoori masala with Chicken tikka",
    rating: 4.3,
    qty: 0,
    title: "no MSG",

  },
];


const Main = () => {

const dispatch = useDispatch();

useEffect(() => {
    Products.map(item => {
        dispatch(addMyProducts(item))
      });
  
  },[]);

    return <StackNavigation />;     
  };




export default Main;


/*
const Burgar = [   
  
  {
   id: 1,
   name: "Burgar",
   price: 550 ,
   pics: require('../Images/Burgar/burgar1.png'),
   qty: 0,
   
 },
 {
   id: 2,  
   name: "Burgar",
   price: 950,
   pics: require('../Images/Burgar/burgar2.Jfif'),
   qty: 0,
 },
 {
   id: 3,
   name: "Burgar",
   price: 650 ,
   pics: require('../Images/Burgar/burgar3.Jfif'),
   qty: 0,
 },
 {
  id: 4,
  name: "Chicken Burgar ",
  price: 350,
  pics: require('../Images/Burgar/chickenBurger.png'),
  qty: 0,
},
{
  id: 5,
  name: "Burgar",
  price: 470,
  pics: require('../Images/Burgar/burger.png'),
  qty: 0,
},
{
  id: 6,
  name: "Chicken Tikka",
  price: 825,
  pics: require('../Images/Burgar/burger4.jpg'),
  qty: 0,
},
];

*/