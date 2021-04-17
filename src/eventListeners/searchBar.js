import getLocationData from '../getLocationData';
import clearSearch from '../clearSearch';
import displayLocationData from '../displayLocationData';
import clearLocationData from '../clearLocationData';
import deleteStoredLocationData from '../deleteStoredLocationData';

function searchBar(target) {
    target.addEventListener('keydown', async (event) => {
        if (event.key === 'Enter') {
            deleteStoredLocationData();
            await getLocationData(target.value);
            clearSearch();
            clearLocationData();
            displayLocationData();
        }
    })
}

export default searchBar;