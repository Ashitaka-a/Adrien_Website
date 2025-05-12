import { mainNavigation } from './components/Navigation';
import './components/Poster';
import './components/Eidolons';

window.addEventListener('DOMContentLoaded',() => {
    document.body.classList.remove ('preload');
    const menu = new mainNavigation;

    menu.createMenu();
})

/*!
* preload class
*/
// window.onload = function(e){
    
// }