function initInputWidget() {
  const btn = document.querySelector('#searchbar .search .btn')
  const searchbar = document.querySelector('#searchbar .search')
  const input = document.querySelector('#searchbar .search .input')
  btn.addEventListener('click', () => {
    searchbar.classList.toggle('active')
    input.focus()
  })
}
initInputWidget()
