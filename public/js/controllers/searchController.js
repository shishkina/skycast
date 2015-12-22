'use strict';

function SearchController(User, Weather, $http, $state) {
  let self = this;

  self.coords = {
    lat: null,
    lng: null
  }

  self.load = function($http) {
    navigator.geolocation.getCurrentPosition(success)
  }

  self.getWeather = function() {
    return Weather.getCurrentWeather();
  }

  self.load($http)

  //helper functions:

  function success(pos) {

    self.coords.lat = pos.coords.latitude;
    self.coords.lng = pos.coords.longitude;

    $http({
      method: 'GET',
      url: '/weather/' + self.coords.lat + '/' + self.coords.lng
    }).then( (weatherData) => {
      if (weatherData.status === 200) {
        Weather.setCurrentWeather(weatherData.data);
      }
      else {
        alert('error fetching weather data!');
      }
    });
  }


}
