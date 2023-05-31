import axios from "axios";
import React from "react";

const options = {
    method: 'get',
    url:'https://api.imgflip.com/get_memes'
}


let memeData = async() => {await axios(options)
    .then((data)=>{
        console.log('MEME DATA: ',data)
        return data;
    })
    .catch((err) => console.log(err));
}  

                
export default memeData;