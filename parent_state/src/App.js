import React from 'react';

import Header from './Components/Header';
import Welcome from './Components/Welcome';
import Boxes from './Components/Boxes';

const App = () => {

    const [user, setUser] = React.useState('Shubham')

  return (
    <div>
    <Header user={user} />
    <Welcome user={user}  />
    <Boxes />

    </div>
    
  )
}

export default App