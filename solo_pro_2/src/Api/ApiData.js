import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api-football-beta.p.rapidapi.com/fixtures',
  params: {
    season: '2022',
    league: '39',
    date: '2023-05-28'
  },
  headers: {
    'X-RapidAPI-Key': 'c4a340f005mshf90ee88a1a3d052p18b111jsnae88d2695619',
    'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
  }
};

let Data = [];
try {
	const response = await axios.request(options);
	console.log(response.data.response);
    Data = response.data.response;
} catch (error) {
	console.error(error);
}

export default Data;