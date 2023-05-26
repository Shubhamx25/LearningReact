import React from 'react';


import memeData from './getMeme';


const Meme = () => {
  let [memeImg, setMemeImg] = React.useState('https://i.imgflip.com/23ls.jpg');

  let handleClick = () => {
    let randomNo = Math.floor(Math.random() * memeData.data.data.memes.length);
    setMemeImg(memeImg = memeData.data.data.memes[randomNo].url);
    console.log(memeImg);  
  }


  return (
     <div>
        <div className='meme-form'>
            <input type='text' placeholder='Top text' />
            <input type='text' placeholder='Bottom text' />
            <button type='submit' onClick={handleClick}>Get new meme img</button>
        </div>
        <div className='meme-img'>
             <p className='top-text'>Top Text</p>
             <p className='bottom-text'> Bottom Text</p>
            <img src={memeImg} alt='meme' />
        </div>
     </div>
  )
}

export default Meme