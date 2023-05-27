import React from 'react';


import memeData from './getMeme';


const Meme = () => {
  let [allMeme , setAllMeme] = React.useState(memeData);
  let [meme, setMeme] = React.useState({
    img:memeData.data.data.memes[Math.floor(Math.random() * memeData.data.data.memes.length)].url,
    top: '',
    bottom: ''
  
  });

  let handleClick = () => {
    let randomNo = Math.floor(Math.random() * memeData.data.data.memes.length);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        img: memeData.data.data.memes[randomNo].url
      }
    });
     
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
            <img src={meme.img} alt='meme' />
        </div>
     </div>
  )
}

export default Meme