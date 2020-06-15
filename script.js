//hamburger-button and menu-small-screen 

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation');


function handleClick() {
    hamburger.classList.toggle('hamburger--active');
    navMenu.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', handleClick);


// scrollToTop
// let myButton = document.querySelector('#top');

// window.onscroll = function(){
//     'use strict';
//     if(window.pageXOffset >= 500) {
//         myButton.style.display = 'none';
//     }
// }

// myButton.onclick = function(){
//     'use strict';
//     window.scrollTo(0,0);

// };

// Smooth Scrolling

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});