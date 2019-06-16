import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';
import fetch from 'node-fetch';
//weather api usage
const WeatherDetail = {
  get(lat, lon) {
    return fetch('http://api.openweathermap.org/data/2.5/weather?lat='+lat.toString()+'&lon='+lon.toString()+'&appid=c95204a799a0c4d3e7b3b3529713d71d')
      .then(res => res.json())
      .then(res => {
        return res.weather[0].main;
      });
  },
};
var gactivity = function(root,args,context,info) {
    return fetch('http://www.boredapi.com/api/activity')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        return res;
      });
}

export { gactivity,WeatherDetail };
