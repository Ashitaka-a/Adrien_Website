import { mainNavigation } from './components/Navigation';
import './components/Poster';

window.addEventListener('DOMContentLoaded',() => {
    document.body.classList.remove ('preload');
    const menu = new mainNavigation;

    menu.createMenu();
});

import './components/Eidolons';


/*!
* preload class
*/
// window.onload = function(e){
    
// }
