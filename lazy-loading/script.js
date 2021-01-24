function initLazyLoading() {
  // Selecting Image
  const background = document.querySelector('.bg')
  // Selecting Progress Text
  const loadingTextElm = document.querySelector('.loading-text')
  let loadingNumber = 0

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
  // Changing Progress Text and Image Loading Effect
  const incrementNumber = function () {
    loadingNumber++
    loadingTextElm.innerText = `${loadingNumber}%`
    loadingTextElm.style.opacity = scale(loadingNumber, 0, 100, 1, 0)
    background.style.filter = `blur(${scale(loadingNumber, 0, 100, 30, 0)}px)`
    if (loadingNumber > 99) {
      clearInterval(interval)
    }
  }
  const interval = setInterval(incrementNumber, 30)
}
initLazyLoading()
