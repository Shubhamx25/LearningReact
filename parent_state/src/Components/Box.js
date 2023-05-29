import React from 'react'

const Box = (props) => {
  /*  const [indBox, setIndBox] = React.useState(props.bData.on)
    console.log("Props in box: ",props.bData.on)
    let handleClick = () => {
      setIndBox(prevIndBox => !prevIndBox);
    }
    */
  return (
  <>
     <div className='box-style'
      style={{backgroundColor: props.bData.on ? 'black' : 'white'}}
      onClick={() => (props.handleClick(props.bData.id))}>
         {props.bData.id}
      </div>
  </>
   
   
  )
}

export default Box