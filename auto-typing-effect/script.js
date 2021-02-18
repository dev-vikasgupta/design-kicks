const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const texts = [
  'Be grateful for who you have in your life',
  'You never know when they will no longer be around you',
]
const text = texts.join(', \n')
let idx = 1
let speed
setSpeed()
typeText()
speedEl.addEventListener('change', setSpeed)
function typeText() {
  textEl.innerText = text.slice(0, idx)
  idx++
  if (idx > text.length) {
    idx = 1
  }
  setTimeout(typeText, speed)
}
function setSpeed() {
  speed = 300 / speedEl.value
}
