import locationData from "./storedLocationData";

function miscStats() {
    const miscStats = document.createElement('div');
    const feelsLike = document.createElement('p');
    const wind = document.createElement('p');
    const humidity = document.createElement('p');
    const units = document.createElement('small');

    miscStats.setAttribute('id', 'miscStats');
    feelsLike.setAttribute('id', 'feelsLike');
    wind.setAttribute('id', 'wind');
    humidity.setAttribute('id', 'humidity');
    units.setAttribute('class', 'units');

    feelsLike.innerText = `FEELS LIKE: ${Math.round(locationData[0].main.feels_like)} \u2109`;
    wind.innerText = `WIND: ${Math.round(locationData[0].wind.speed)} MPH`;
    humidity.innerText = `HUMIDITY: ${Math.round(locationData[0].main.humidity)}%`;

    miscStats.appendChild(feelsLike);
    miscStats.appendChild(wind);
    miscStats.appendChild(humidity);

    return miscStats;
}

export default miscStats;