
import Navbar from './nav';

import Card from './card';
import { useState } from 'react';


function App() {
  var vdata = [
    {
      id: 1,
      name: "Tasty Granite Towels",
      price: 143,
      currency:"$",
      description: "Pants",
      rating: "*****",
      img: "http://placehold.it/700x400&text=product 1",
    },
    {
      id: 2,
       name: "Licensed Steel Chicken",
        price: 716,
      currency:"$",
    description: "Bacon",
      rating: "***",
      img: "http://placehold.it/700x400&text=product 2",
    },
    {
      id: 3,
      
      
      name: "Generic Steel Hat",
      price: 449,
      currency:"$",
      description: "Computer",
      rating: "*****",
      img: "http://placehold.it/700x400&text=product 3",
    },
    {
      id: 4,
     name: "Handmade Fresh Mouse",
      price: 426.00,
      currency:"$",
     description: "Soap",
      rating: "****",
      img: "http://placehold.it/700x400&text=product 4",
    },
    {
      id: 5,
      name: "Licensed Granite Chips",
      price: 512.0,
      currency:"$",
      description: "Chair",
      rating: "****",
      img: "http://placehold.it/700x400&text=product 5",
    },
    {
      id: 6,
      name: "Intelligent Wooden Keyboard",
      price: 731,
      description: "Table",
      currency:"$",
      rating: "****",
      img: "http://placehold.it/700x400&text=product 6",
    },
    {
      id: 7,
      name: "Intelligent Hammer",
     price: 331,
     currency:"$",
     description: "Hammer",
      rating: "*****",
      img: "http://placehold.it/700x400&text=product 7",
    },
  ];
  const [cart,setcart]=useState([{}])
  const [total,settotal]=useState(0)
  let addtocart=(product)=>{
    setcart([...cart,product])
    settotal(total + product.price)
  }
  let removecart=(item)=>{
    setcart(cart.filter( obj => obj.id !==item.id))
    settotal(total-item.price)
  }
 
  return (
  <>
  <Navbar></Navbar>
<div className="container">
  <div className="row">
  <div class="col-lg-3">
  <h1 class="my-4">Shop Name </h1>
              <div class="list-group">
               {
                 cart.map((item)=>{
                   return <div className="list-group-item"> {item. description} - {item.price}
                   
                   <span className="btn btn-primary" onClick={()=>{
                      removecart(item)
                   }
                   }>Remove</span>
                   </div>
                 })
               }
               
              </div>
              <h3>Total-{total}</h3>
  </div>
  <div class="col-lg-9">
    <div className="row">
   {
      vdata.map((obj)=>{
        return <Card data={obj} handlecart={addtocart}></Card>
      })
   }
    </div>

  </div>
  </div>
</div>


</>
  );
}

export default App;
