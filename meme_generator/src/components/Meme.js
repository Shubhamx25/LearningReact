import React from 'react';
import img from '../Assets/SeekPng.com_obama-face-png_1733325.png'

const Meme = () => {
  return (
     <div>
        <form className='meme-form'>
            <input type='text' placeholder='Top text' />
            <input type='text' placeholder='Bottom text' />
            <button type='submit' >Get new meme img</button>
        </form>
        <div className='meme-img'>
            <img src={img} />
        </div>
     </div>
  )
}

export default Meme