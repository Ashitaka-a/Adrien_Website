import { links } from "../data/Menu";

export class mainNavigation {
    constructor() {
        this.menuContainer = document.getElementById('Menu');
        this.html = document.querySelector('html');
        this.navLinks = document.querySelectorAll(".navbar__menu__link");
        this.bindMenuEvents();
    }

    createMenu() {
        let menu = `<ul class="navbar__menu">`;
        
        links.forEach(function(link) {
            menu += `<li class="navbar__menu__item"><a href="${link.url}" class="navbar__menu__link">${link.label}</a></li>`;
        });
        
        menu += `<li class="navbar__menu__item bottom-image"><img src="pictures/header_open_menu/character_header.webp" alt="bottom image"></li>`;
        menu += `</ul>`;

        this.renderMenu(menu);
    }

    renderMenu(menu) {
        this.menuContainer.innerHTML = menu;
    }

    bindMenuEvents() {
        const hamburger = document.querySelector(".hamburger");

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            this.html.classList.toggle('has-menu-opened');
        })

        this.navLinks.forEach(n => n. addEventListener("click", () => {
            hamburger.classList.remove("active");
            this.html.classList.remove('has-menu-opened');
        }))
    }
}