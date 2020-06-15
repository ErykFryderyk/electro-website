
//slider
let sliderImages = document.querySelectorAll('.slide'),
arrowLeft = document.querySelector('#arrow-left'), 
arrowRight = document.querySelector('#arrow-right'),
current=0;

//images all clear
function reset(){
    for(let i =0; i <sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}

// Init slider
function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}

//show previous
function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}
// show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

//click arrow left
arrowLeft.addEventListener('click', function(){
    if(current ===0){
        current = sliderImages.length;
    }
    slideLeft();
});

//click arrow right
arrowRight.addEventListener('click', function (){
    if (current === sliderImages.length - 1) {
        current = - 1;
    }
    slideRight();
});

startSlide();


//hamburger-button and menu-small-screen 

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation');


function handleClick() {
    hamburger.classList.toggle('hamburger--active');
    navMenu.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', handleClick);


// scrollToTop
let myButton = document.querySelector('#top');

window.onscroll = function(){
    'use strict';
    if(window.pageXOffset >400) {
        muButton.style.display = 'none';
    }
}

myButton.onclick = function(){
    'use strict';
    window.scrollTo(0,0);

};


$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});

// masonry

const masonry = new Macy({
    container:  '.masonry-gallery',
    mobileFirst: true,
    columns: 1,
    breakAt: {
        500: 2,
        700: 3,
        1100: 4,
    },
    margin: {
        x: 20,
        y: 20,
    }
});
