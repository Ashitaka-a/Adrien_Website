import { links } from "../Menu";

let menu = `<ul class="navbar__menu">`;
let menuContainer = document.getElementById('Menu');

links.forEach(function(link) {
    menu += `<li class="navbar__menu__item"><a href="${link.url}" class="navbar__menu__link">${link.label}</a></li>`;
});

menu += `</ul>`;
menuContainer.innerHTML = menu;