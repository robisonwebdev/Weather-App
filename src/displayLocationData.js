import cityName from "./cityName";
import skyData from "./skyData";
import weatherDataContainer from "./weatherDataContainer";

function displayLocationData() {
    const main = document.querySelector('#main');
    const locationDataContainer = document.createElement('div');

    locationDataContainer.setAttribute('id', 'locationDataContainer');

    locationDataContainer.appendChild(skyData());
    locationDataContainer.appendChild(cityName());
    locationDataContainer.appendChild(weatherDataContainer());
    main.appendChild(locationDataContainer);
}

export default displayLocationData;