import fetch from 'node-fetch';
import {gactivity,WeatherDetail } from './connectors';

var navigator = require('web-midi-api');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
}
else {
    var lat = 19;
    var lon = 72;
}

function showPosition(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
}
const resolvers = {
  Query: {
    getWeatherDetail() {
      return WeatherDetail.get(lat, lon);
    },

// boredAPI usage here

    activity : function(root,args,context,info) {
        return fetch('http://www.boredapi.com/api/activity?type='+args.type)
          .then(res => res.json())
          .then(res => {
            console.log(res);
            return res;
          });
    }
  }
};

export default resolvers;
