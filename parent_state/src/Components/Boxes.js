import React from 'react';
import Data from './Data';
import Box from './Box';

const Boxes = () => {
    const [boxData, setboxData] = React.useState(Data);

   /*  const toggleOn = () => {
      setboxData(prevBoxData => {
        return([...prevBoxData,prevBoxData.on= !prevBoxData.on])
      })
    } */

    let boxes = boxData.map((item) => {
      console.log("Item in map: ",item)
      return(  
           <Box bData = {item} />
  )
    })
    
  return (
    <div className='box-container'>
      {boxes}

    </div>
    
  )
}

export default Boxes;