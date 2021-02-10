;(function () {
  const slideContainer = document.querySelector('.slider-container')
  const slideRight = document.querySelector('.right-slide')
  const slideLeft = document.querySelector('.left-slide')
  const upButton = document.querySelector('.up-button')
  const downButton = document.querySelector('.down-button')
  const slidesLength = slideRight.querySelectorAll('div').length

  let activeSlideIdx = 0
  slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
  upButton.addEventListener('click', (e) => {
    activeSlideIdx--
    if (activeSlideIdx < 0) {
      activeSlideIdx = slidesLength - 1
    }
    slideLeft.style.top = `-${activeSlideIdx * 100}vh`
    slideLeft.style.transition = `all 500ms ease`
  })
  downButton.addEventListener('click', (e) => {
    activeSlideIdx++
    if (activeSlideIdx > slidesLength - 1) {
      activeSlideIdx = 0
    }
    slideLeft.style.top = `-${activeSlideIdx * 100}vh`
    slideLeft.style.transition = `all 500ms ease`
  })
})()
