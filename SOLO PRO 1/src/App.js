import React from 'react';

import Info from './Components/Info';
import CardBody from './Components/CardBody';
import Footer from './Components/Footer';

let App = () =>{
    return(
        <div className='card'>
            <Info/>
            <CardBody/>
            <Footer/>
        </div>)
}


export default App;