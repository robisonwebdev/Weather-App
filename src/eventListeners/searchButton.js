import getLocationData from '../getLocationData';
import clearSearch from '../clearSearch';
import displayLocationData from '../displayLocationData';
import clearLocationData from '../clearLocationData';
import deleteStoredLocationData from '../deleteStoredLocationData';

function searchButton(target) {
    target.addEventListener('click', async () => {
        const searchBar = document.querySelector('#search');

        deleteStoredLocationData();
        await getLocationData(searchBar.value);
        clearSearch();
        clearLocationData();
        displayLocationData();
    })
}

export default searchButton;