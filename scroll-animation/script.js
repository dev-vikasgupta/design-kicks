function initScrollAnimation() {
  window.addEventListener('scroll', checkBoxes)
}
function checkBoxes() {
  const container = document.getElementById('scrollAnimation')
  const triggerBottom = (window.innerHeight / 5) * 4
  const boxes = document.querySelectorAll('#scrollAnimation .box')
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
initScrollAnimation()
checkBoxes()
