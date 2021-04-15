function getLocationData(cityName) {
    let api = '42e98cfcab5534e4a21196b5a280a360';

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&APPID=${api}`, { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            console.log(`Temp: ${response.main.temp}`);
            console.log(`Skies: ${response.weather[0].description}`);
        })
        .catch(err => {
            console.log(err);
        })
}

export default getLocationData;