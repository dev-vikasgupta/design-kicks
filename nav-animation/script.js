function initNavAnimation() {
  const button = document.querySelector('#toggle')
  const navbar = document.querySelector('#nav')
  button.addEventListener('click', () => {
    navbar.classList.toggle('active')
    console.log('click')
  })
}
initNavAnimation()
