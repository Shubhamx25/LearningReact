import React from 'react';
import Data from './Data';
import Box from './Box';

const Boxes = () => {
    const [boxData, setboxData] = React.useState(Data);

    const toggleOn = (ids) => {
      setboxData(prevBoxData => { 
      return (
        prevBoxData.map(item => {
          if(item.id === ids){
            item.on = !item.on;
          } 
          return item;
        })
      )
      console.table(prevBoxData);
      })
    }
    
    let boxes = boxData.map((item) => {
      console.log("Item in map: ",item)
      return(  
           <Box bData = {item} handleClick = {toggleOn} />
      )
    })
    
  return (
    <div className='box-container'>
      {boxes}
    </div>
    
  )
}

export default Boxes;