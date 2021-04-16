import getLocationData from "../getLocationData";

function searchButton(target) {
    target.addEventListener('click', () => {
        const searchBar = document.querySelector('#search');

        getLocationData(searchBar.value);
    })
}

export default searchButton;