import React from 'react'

const Box = (props) => {
   const [indBox, setIndBox] = React.useState(props.bData)
    console.log("Props in box: ",props.bData.on)
    let handleClick = () => {
      setIndBox(prevIndBox => {
        [...prevIndBox],
        prevIndBox.on = !prevIndBox.on
      })
    }
   
  return (
  <>
     <div className='box-style'
      style={{backgroundColor: indBox.bData.on ? 'black' : 'white'}}
      onClick={handleClick}>
         {props.id}
      </div>
  </>
   
   
  )
}

export default Box