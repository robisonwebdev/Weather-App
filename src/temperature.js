import locationData from "./storedLocationData";

function temperature() {
    const temperature = document.createElement('div');
    const degrees = document.createElement('h1');
    const units = document.createElement('small');

    temperature.setAttribute('id', 'temperature');
    degrees.setAttribute('id', 'degrees');
    units.setAttribute('id', 'units');

    degrees.innerText = `${Math.round(locationData[0].main.temp)}`;

    units.innerText = `\u2109`;

    temperature.appendChild(degrees);
    temperature.appendChild(units);

    return temperature;
}

export default temperature;