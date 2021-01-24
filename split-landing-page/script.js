function initSplitContainerAnimation() {
  const container = document.querySelector('#split-landing .container')
  const left = document.querySelector('#split-landing .left')
  const right = document.querySelector('#split-landing .right')
  left.addEventListener('mouseenter', function () {
    container.classList.add('hover-left')
  })
  left.addEventListener('mouseleave', function () {
    container.classList.remove('hover-left')
  })
  right.addEventListener('mouseenter', function () {
    container.classList.add('hover-right')
  })
  right.addEventListener('mouseleave', function () {
    container.classList.remove('hover-right')
  })
}
initSplitContainerAnimation()
