const imageContainer = document.getElementById('imgs');
const btnPrev = document.getElementById('left')
const btnNext = document.getElementById('right')
let counter = 0;
const totalImages= imageContainer.children.length;

btnPrev.addEventListener('click', showPrevSlide);
btnNext.addEventListener('click', showNextSlide);

setInterval(() => {
    showNextSlide();
}, 1000);

function showPrevSlide() {
    // If it's first slide
    if(!counter) {
        // set to last slide
        counter = totalImages - 1;
    } else {
        // set previous slide;
        counter--;
    }
    setSlide(counter);
}
function showNextSlide() {
    // if it is last slide in slider
    if(counter === totalImages-1) {
        // set to first slide;
        counter = 0;
    } else {
        // set to next slide
        counter++;
    }
    setSlide(counter);
}
function setSlide(counter) {
    imageContainer.style.transform = `translateX(${-counter*100}%)`;
}