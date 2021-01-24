function initFormsUI() {
  const inputLabels = document.querySelectorAll(
    '#forms-ui form > .form-group > label'
  )
  inputLabels.forEach((label) => {
    label.innerHTML = label.innerText
      .split('')
      .map((letter, index) => {
        return `<span style="transition-delay: ${
          index * 50
        }ms">${letter}</span>`
      })
      .join('')
  })
}
initFormsUI()
