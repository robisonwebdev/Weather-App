import search from "./search";

function header() {
    const header = document.createElement('div');

    header.setAttribute('id', 'header');

    header.appendChild(search('Enter City', 'las la-search'))

    return header;
}

export default header;