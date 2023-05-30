import React from 'react'

const WindowTracker = () => {
    let [wid, setWid] = React.useState(window.innerWidth);
    /* React.useEffect(() => {
        setWid(wid = (window.innerWidth));
    },[window.innerWidth]); */
    window.addEventListener('resize',() => {
        setWid(wid = window.innerWidth);
    })
    
  return (
    <div>
        <h2>Width: {wid}</h2>       
    </div>
  )
}

export default WindowTracker;