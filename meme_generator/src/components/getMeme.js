import axios from "axios";

const options = {
    method: 'get',
    url:'https://api.imgflip.com/get_memes'
}

let memeData =  await axios(options)
                    .then((data)=>{
                        console.log('MEME DATA: ',data)
                        return data;
                    })
                    .catch((err) => console.log(err));

                
export default memeData;