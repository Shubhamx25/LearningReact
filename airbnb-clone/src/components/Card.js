import React from 'react'

const card = () => {
  return (
    <div className='card'>
        <div className='card-img'>
            <img src='https://images.unsplash.com/photo-1593055497705-59a84c5928b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'/>
        </div>
        <div className='card-details'>
            <p className='rate'><img src='https://img.icons8.com/?size=512&id=104&format=png' width='14px'/>&nbsp;5.0(6)&nbsp;&#9679;&nbsp;USA</p>
            <h3 className='card-title'>Life lessons with Katie Holmes</h3>
            <p><strong>From $136</strong>/person</p>
        </div>
    </div>
  )
}

export default card