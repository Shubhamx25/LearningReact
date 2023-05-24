import React from 'react'

const Info = () => {
  return (
    <div className='info'>

        <div className='info-img'>
        <img src='https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'/>
    </div>
    <div className='info-content'>
        <h2>John Wick</h2>
        <p>Contract Killer</p>
    </div>
    <div className='info-button'>
        <a href='#'><button>Email</button></a>
        <a href='#'><button>Linkedin</button></a>
    </div>   

    </div>
  )
}

export default Info