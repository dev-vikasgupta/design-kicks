;(function () {
  const left = document.getElementById('left')
  const right = document.getElementById('right')
  const body = document.getElementsByTagName('body')[0]
  const slide = document.querySelectorAll('.slide')
  const images = [
    'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
    'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
    'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  ]
  let current = 0
  const total = images.length - 1
  // Removing active slide
  const removeActiveSlide = () => {
    slide[current].classList.remove('active')
  }
  // setting the active image to body and slide
  const setSlideImage = () => {
    const image = `url(${images[current]})`
    body.style.backgroundImage = image
    slide[current].style.backgroundImage = image
    slide[current].classList.add('active')
  }
  // Calculate current slide, based on left or right button click
  const calculateCurrent = (type) => {
    if (type === 'left') {
      current--
      if (current < 0) {
        current = total
      }
    } else {
      current++
      if (current > total) {
        current = 0
      }
    }
  }
  const slideButtonEvent = () => {
    removeActiveSlide()
    calculateCurrent()
    setSlideImage()
  }
  left.addEventListener('click', slideButtonEvent)
  right.addEventListener('click', slideButtonEvent)
  // Set Slide Image initially
  setSlideImage()
})()
