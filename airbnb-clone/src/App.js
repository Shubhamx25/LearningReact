import React from 'react';
import Card from './components/Card';
import CardData from './components/CardData';

const App = () => {

let cardJsx = CardData.map(exp => {
  return(
  <Card 
      // *********************Method 1: passing data*****************************
       /*  img = {exp.img}
        title = {exp.title}
        price = {exp.price}
        rating = {exp.rating}
        noOfRating = {exp.noOfRating} */



        // *********************Method 2: passing data*****************************
       /*  item = {exp}   */
        // passes the whole individual object but in props everywhere we have to explicitly metion props.item.propertyName 



        // *********************Method 3: passing data*****************************
        {...exp} 
        // spread syntax feature from es6
  />
  )

})
console.log(cardJsx);

  return (
      <div className='card-container'>
          {cardJsx} 
      </div>
  )
}

export default App;


       /*  <Card
          img = 'https://images.unsplash.com/photo-1593055497705-59a84c5928b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
          title = 'Life lessons with Katie Holmes'
          price = {136}
          rating = {5.0}
          noOfRating = {6}
        /> */