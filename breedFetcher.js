const request = require('request');

const breedName = process.argv[2];

const EndPointQuery = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

request(EndPointQuery, (error, response, body) => {
  if (error) {
    throw error;
  } else {
    const data = JSON.parse(body);
    if (data.length) {
      console.log(data[0].description);
    } else {
      console.log(`Breed ${breedName} not found!`);
    }
  }
});