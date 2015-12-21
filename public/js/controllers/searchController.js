'use strict';

function SearchController(User, $http, $state) {
  let self = this;

  self.coords = {
    lat: null,
    long: null
  }

  self.load = function() {
    //jquery code here
    $http({
      method: 'POST',
      url: 'https://www.googleapis.com/geolocation/v1/geolocate?key=' + process.env.GOOGLE_KEY,
    }).then( (data) => {
      console.log('data done');
    })
  }


  self.load();
}
