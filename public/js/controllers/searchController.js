'use strict';

function SeachController(User, $html, $state) {
  let self = this;
  self.searchByGeoLocation = function() {
    let GOOGLE_KEY = process.env.GOOGLE_KEY;
    let apiURL = 'https://www.googleapis.com/geolocation/v1/geolocate?key=' + GOOGLE_KEY;
    let startPos = undefined;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    }
    else {

    }
  }

  //helper function:
  function geoSuccess(position) {
    startPost = position;
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPost.coords.longitude;
  };

  function geoError = function(error) {
    console.log('Error occurred. Error code: ' + error.code);
  };
}
