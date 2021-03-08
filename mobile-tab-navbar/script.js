const contents = document.querySelectorAll('.content');
const navButtons = document.querySelectorAll('nav li');

navButtons.forEach((navButton, idx) => {
    navButton.addEventListener('click', () => {
         resetActive(contents, 'show');
         resetActive(navButtons, 'active');
         setActive(contents[idx], 'show');
         setActive(navButton[idx], 'active');
    });
});
function resetActive(elements, activeClass) {
    elements.forEach(element => {
        element.classList.remove(activeClass);
    });
}
function setActive(element, activeClass) {
    element.classList.add(activeClass);
}