import React from 'react'

const card = (props) => {
  return (
    <div className='card'>
        <div className='card-img'>
            <img src={props.img}/>
        </div>
        <div className='card-details'>
            <p className='rate'><img src='https://img.icons8.com/?size=512&id=104&format=png' width='14px'/>&nbsp;{props.rating}({props.noOfRating})&nbsp;&#9679;&nbsp;USA</p>
            <h3 className='card-title'>{props.title}</h3>
            <p><strong>From ${props.price}</strong>/person</p>
        </div>
    </div>
  )
}

export default card