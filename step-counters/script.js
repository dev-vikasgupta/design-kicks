// Progress Steps
function initProgressSteps() {
  const prev = document.getElementById('prev')
  const next = document.getElementById('next')
  const circles = document.querySelectorAll('.circle')
  let currentActive = 1
  prev.addEventListener('click', function () {
    currentActive--
    if (currentActive < 1) {
      currentActive = 1
    }
    updateProgressSteps(currentActive, circles)
  })
  next.addEventListener('click', function () {
    currentActive++
    if (currentActive > circles.length) {
      currentActive = circles.length
    }
    updateProgressSteps(currentActive, circles)
  })
}
function updateProgressSteps(currentActive, circles) {
  const prev = document.getElementById('prev')
  const next = document.getElementById('next')
  const progress = document.getElementById('progress')
  // Update the active state of circles
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })
  const totalActive = document.querySelectorAll('.circle.active').length
  const totalCircles = circles.length
  const activeLineWidth = ((totalActive - 1) / (totalCircles - 1)) * 100 + '%'
  progress.style.width = activeLineWidth
  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === totalCircles) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
initProgressSteps()
