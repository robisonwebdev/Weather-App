import clearSearch from "../clearSearch";
import getLocationData from "../getLocationData";

function searchButton(target) {
    target.addEventListener('click', async () => {
        const searchBar = document.querySelector('#search');

        await getLocationData(searchBar.value);
        clearSearch();
    })
}

export default searchButton;