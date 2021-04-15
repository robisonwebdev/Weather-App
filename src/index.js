import header from './header';
import footer from './footer';
import main from './main';

const content = document.querySelector('#content');

content.appendChild(header());
content.appendChild(main());
content.appendChild(footer('https://github.com/robisonwebdev', 'David Robison'));