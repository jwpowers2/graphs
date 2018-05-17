var axios = require('axios');
var mode   = process.env.NODE_ENV;
var apiKey = process.env.GOOGLE_MAPS_API_KEY;

// make a class and export it to use in graph.js

function Geocode(){
    //this.address = address;
    this.getLatLong = function(address){
      axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: address,
          key: apiKey
        }
      })
      .then(function (response) {
        console.log(response.data.results[0].geometry.location);
        //return response.data.results[0].geometry.location;
      })
      .catch(function (error) {
        //console.log(error);
        return error;
      });
    }
}

var gc = new Geocode();
gc.getLatLong("Charlotte, NC");

//module.exports = Geocode;