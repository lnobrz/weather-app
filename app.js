const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Boston", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      return data
        ? console.log(data.location, forecastData)
        : console.log(error);
    });
  }
});
