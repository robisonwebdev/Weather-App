import miscStats from "./miscStats";
import temperature from "./temperature";

function weatherDataContainer() {
    const weatherDataContainer = document.createElement('div');

    weatherDataContainer.setAttribute('id', 'weatherDataContainer');

    weatherDataContainer.appendChild(temperature());
    weatherDataContainer.appendChild(miscStats());

    return weatherDataContainer;
}

export default weatherDataContainer;