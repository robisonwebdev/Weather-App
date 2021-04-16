import getLocationData from '../getLocationData';
import clearSearch from '../clearSearch';

function searchBar(target) {
    target.addEventListener('keydown', async (event) => {
        if (event.key === 'Enter') {
            await getLocationData(target.value);
            clearSearch();
        }
    })
}

export default searchBar;