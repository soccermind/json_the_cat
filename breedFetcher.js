const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
      // throw error;
    } else {
      const data = JSON.parse(body);
      if (data.length) {
        callback(null, data[0].description);
        // console.log(data[0].description);
      } else {
        callback(`Breed ${breedName} not found!`, null);
        // console.log(`Breed ${breedName} not found!`);
      }
    }
  });
};

module.exports = { fetchBreedDescription };