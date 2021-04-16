async function getLocationData(cityName) {
    const api = '42e98cfcab5534e4a21196b5a280a360';

    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&APPID=${api}`, { mode: 'cors' });
    const cityData = await response.json();

    console.log(`Temp: ${Math.round(cityData.main.temp)}`);
}

export default getLocationData;