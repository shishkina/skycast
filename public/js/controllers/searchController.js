'use strict';

function SearchController(User, Weather, $http, $state) {
  let self = this;

  self.coords = {
    lat: null,
    lng: null
  }

  self.load = function($http) {

    $http({
      method: 'GET',
      url: '/geo',
    }).then( (data) => {
      if (data.status === 200) {
        self.coords = getLocation(data);
        $http({
          method: 'GET',
          url: '/weather/' + self.coords.lat + '/' + self.coords.lng

        }).then( (weatherData) => {
          if (weatherData.status === 200) {
            Weather.setCurrentWeather = weatherData.data;
          }
          else {
            alert('error fetching weather data!');
          }
        });
      }
      else {
        alert('something went wrong during locating you!');
      }
    });
  }

  self.getWeather = function() {
    return Weather.getCurrentWeather();
  }

  self.load($http)

  //helper functions:

  function getLocation(data) {
    //expects data response from google location API
    return data.data.location
  }

}
