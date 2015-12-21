'use strict';

function weather() {

  let weather = {};

  return {
    setCurrentWeather: function(weatherObj) {
      weather = weatherObj;
    }

    getCurrentWeather: function() {
      return weather;
    }
  }
}
