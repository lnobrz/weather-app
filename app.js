const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=abf49d528e84d757b88ad02edb54a4b7&query=37.8267,-122.4233&units=m";

request({ url: url, json: true }, (error, response) => {
  const data = response.body;
  console.log(
    `${data.current.weather_descriptions[0]}. It is currently ${data.current.temperature} degrees. It feels like ${data.current.feelslike} degress.`
  );
});
