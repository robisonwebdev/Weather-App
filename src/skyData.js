import locationData from "./storedLocationData";

function skyData() {
    const skyData = document.createElement('div');
    const h2 = document.createElement('h3');

    skyData.setAttribute('id', 'skyData');

    h2.innerText = locationData[0]['weather'][0].main;

    skyData.appendChild(h2);

    return skyData;
}

export default skyData;