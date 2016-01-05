'use strict';

function SearchController(User, Weather, $http, $state) {
  console.log('instance of search controller!');
  let self = this;

  self.searchFor = undefined;

  self.coords = {
    lat: null,
    lng: null
  }

  self.location = "Your Location";

  self.searchWeather = function() {
    if (self.searchFor) {
      $http({
        method: 'GET',
        url: '/location/'+self.searchFor
      }).then( (data) => {
        console.log('we got data!');
      })
    }
  }

  self.load = function() {
    console.log('getting current location!');
    navigator.geolocation.getCurrentPosition(success)
  }

  self.getWeather = function() {
    return Weather.getCurrentWeather();
  }

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
