import getLocationData from '../getLocationData';
import clearSearch from '../clearSearch';
import displayLocationData from '../displayLocationData';

function searchBar(target) {
    target.addEventListener('keydown', async (event) => {
        if (event.key === 'Enter') {
            await getLocationData(target.value);
            clearSearch();
            displayLocationData();
        }
    })
}

export default searchBar;