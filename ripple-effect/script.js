;(() => {
  const buttons = document.querySelectorAll('.ripple')
  buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
      const circleElm = document.createElement('span')
      const { layerX, layerY } = e
      circleElm.style.top = `${layerY}px`
      circleElm.style.left = `${layerX}px`
      circleElm.classList.add('circle')
      button.appendChild(circleElm)
      setTimeout(() => {
        this.removeChild(circleElm)
      }, 500)
    })
  })
})()
