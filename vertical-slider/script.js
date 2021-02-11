;(function () {
  const slideContainer = document.querySelector('.slider-container')
  const slideRight = document.querySelector('.right-slide')
  const slideLeft = document.querySelector('.left-slide')
  const upButton = document.querySelector('.up-button')
  const downButton = document.querySelector('.down-button')
  const slidesLength = slideRight.querySelectorAll('div').length

  let activeSlideIdx = 3
  slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
  upButton.addEventListener('click', (e) => {
    activeSlideIdx--
    if (activeSlideIdx < 0) {
      activeSlideIdx = slidesLength - 1
    }
    moveLeftSlide()
    moveRightSlide()
  })
  downButton.addEventListener('click', (e) => {
    activeSlideIdx++
    if (activeSlideIdx > slidesLength - 1) {
      activeSlideIdx = 0
    }
    moveLeftSlide()
    moveRightSlide()
  })

  function addTransition(slide) {
    slide.style.transition = `all 500ms ease`
  }

  function moveLeftSlide() {
    slideLeft.style.top = `-${activeSlideIdx * 100}vh`
    addTransition(slideLeft)
  }

  function moveRightSlide() {
    slideRight.style.transform = `translateY(-${
      (slidesLength - 1 - activeSlideIdx) * 100
    }vh)`
    addTransition(slideRight)
  }
})()
