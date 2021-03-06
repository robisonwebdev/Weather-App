import searchBarEventListener from './eventListeners/searchBar';
import searchButtonEventListener from './eventListeners/searchButton';

function search(placeholder, iconClass) {
    const searchContainer = document.createElement('div');
    const searchForm = document.createElement('form');
    const searchInput = document.createElement('input');
    const searchButton = document.createElement('button');
    const searchIcon = document.createElement('i');

    searchContainer.setAttribute('id', 'searchContainer');
    searchForm.setAttribute('onsubmit', 'return false');
    searchForm.setAttribute('id', 'searchForm');
    searchInput.setAttribute('type', 'text');
    searchInput.setAttribute('id', 'search');
    searchInput.setAttribute('name', 'search');
    searchInput.setAttribute('placeholder', placeholder);
    searchButton.setAttribute('id', 'searchButton');
    searchButton.setAttribute('type', 'button');
    searchIcon.setAttribute('class', iconClass);

    searchBarEventListener(searchInput);
    searchButtonEventListener(searchButton);

    searchButton.appendChild(searchIcon);
    searchForm.appendChild(searchInput);
    searchForm.appendChild(searchButton);
    searchContainer.appendChild(searchForm);

    return searchContainer;
}

export default search;