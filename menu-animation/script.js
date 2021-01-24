// Init Main Project
function initProject() {
  // Open Button icon (hamburger) on top left corner
  const open = document.querySelector('#rotating-menu #open')
  // Close Button icon (cross ) on top left corner
  const close = document.querySelector('#rotating-menu #close')
  // Blog Container
  const container = document.querySelector('#rotating-menu .container')
  open.addEventListener('click', () => {
    container.classList.add('show-nav')
  })
  close.addEventListener('click', () => {
    container.classList.remove('show-nav')
  })
}
initProject()
