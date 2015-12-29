'use strict';

function SearchController(User, Weather, $http, $state) {
  console.log('instance of search controller!');
  let self = this;

  self.coords = {
    lat: null,
    lng: null
  }

  self.load = function($http) {
    console.log('getting current location!');
    navigator.geolocation.getCurrentPosition(success)
  }

  self.getWeather = function() {
    return Weather.getCurrentWeather();
  }

  //setTimeout(self.load($http), 500);

  self.load($http)

  //helper functions:

  function success(pos) {
    console.log('In success function!');
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
