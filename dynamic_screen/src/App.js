import React from 'react'
import WindowTracker from './WindowTracker'
import ToggleBtn from './ToggleBtn';

const App = () => {
   const [isShown, setIsShown] = React.useState(true);
   const handleClick = () => {
    setIsShown(prevIsShown => !prevIsShown);
   }

   const [isDark, setIsDark] = React.useState(true);
   const handleDark = () => {
    console.log('clicked');
       setIsDark(prevIsDark => !prevIsDark);
   }
   


  return (
    <div className={`container ${isDark ? '': 'lightmode'}`}>
        
        <button onClick={handleClick}>
            Window tracker toggle
        </button><br/>
        {isShown && <WindowTracker />}
        <ToggleBtn dark = {isDark} toggleDarkMode = {handleDark} />
        
    </div>
  )
}

export default App