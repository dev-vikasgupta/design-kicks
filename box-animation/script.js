const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

btn.addEventListener('click', toggleBoxAnimation);
function createBoxes() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundPosition = `${j*-125}px ${i*-125}px`
            boxesContainer.appendChild(box);
        }   
    }
}
function toggleBoxAnimation() {
    boxesContainer.classList.toggle('big');
}
createBoxes();