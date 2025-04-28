import './header.js';


// Test
let scrollDown = 0;
let PosterPicture = document.querySelector('.poster__picture img');

// make sure and go down to the second page
document.addEventListener("scroll", (event) => {

    if (window.scrollY) {
        scrollDown = scrollY;

        if ((scrollDown < 200) && (scrollDown > 100)) {
            console.log(scrollDown);
            PosterPicture.style.transform = 'translate3d(0, ' + scrollDown * -1 + 'px, 0px)';
        }
        // window.scroll(0, 0); // reset the scroll position to the top left of the document.
    }

});

/*!
* preload class
*/
window.onload = function(e){
    document.body.classList.remove ('preload');
}
