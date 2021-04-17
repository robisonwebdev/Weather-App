import locationData from "./storedLocationData";

function cityName() {
    const cityName = document.createElement('div');
    const h1 = document.createElement('h2');

    cityName.setAttribute('id', 'cityName');

    h1.innerText = locationData[0].name;

    cityName.appendChild(h1);

    return cityName;
}

export default cityName;