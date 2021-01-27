;(() => {
  const toggleBtn = document.querySelector('.toggle')

  // toggle theme modes
  toggleBtn.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    html.classList.toggle('dark')
    const innerText = this.innerText
    const isInDarkMode = html.classList.contains('dark')
    if (isInDarkMode) {
      e.target.innerText = 'Light Mode'
    } else {
      e.target.innerText = 'Dark Mode'
    }
  })
})()
