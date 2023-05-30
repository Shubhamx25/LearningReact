import React from 'react'

const ToggleBtn = (props) => {
   
  return (
    <div className='toggleBtn'>
        <input type='checkbox' id='checked' className='checkbox' onChange={props.toggleDarkMode}/>
        <label htmlFor='checked' className='toggle'><p>On&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Off</p></label>
    </div>
  )
}

export default ToggleBtn