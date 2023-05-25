import React from 'react';

import Card from './components/Card';
import Dropdown from './components/Dropdown';

import Data from './Api/ApiData'; 


const App = () => {
  let cardData = Data.map((fixture) => {
   
    let timeString = fixture.fixture.date.split('T');
    let date = timeString[0];
    let time = `${timeString[1].split(':')[0]}:${timeString[1].split(':')[1]}`;

    return (
        <Card
            date = {date}
            time = {time}
            {...fixture} 
        />
    )
   
  })

  return (
    <div>
        <Dropdown />
        {cardData}
    </div>
  )
}

export default App