const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 400

for (let index = 0; index < SQUARES; index++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));
    square.addEventListener('touchstart', () => setColor(square));
    square.addEventListener('touchmove', () => setColor(square));
    square.addEventListener('touchend', () => removeColor(square));
    container.append(square);
}

function setColor(square) {
    const color = getRandomColor();
    square.style.backgroundColor = color;
}
function removeColor(square) {
    square.style.backgroundColor = '#1d1d1d';
}
function getRandomColor() {
    return colors[Math.floor(Math.random()* colors.length)]
}