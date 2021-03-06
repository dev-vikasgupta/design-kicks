const likeMe = document.querySelector('.likeMe')
const heartInsidePic = document.querySelector('.likeMe .fa-heart')
const footerLike = document.querySelector('.footer .fa-heart')
const times = document.querySelector('#times')
let clickTimes = 0
const image = {
  url: 'https://picsum.photos/',
  v1: '300/440',
  v2: '301/441',
  selected: 'v1',
}
const imageFlag = false
let alreadyClick = false
let lastClick = 0
likeMe.addEventListener('click', simulateDoubleClick)
footerLike.addEventListener('click', simulateDoubleClick)
function simulateDoubleClick(params) {
  const nowTime = new Date()
  if (alreadyClick && (nowTime - lastClick < 500)) {
    alreadyClick = false
    lastClick = 0
    likePic()
  } else {
    alreadyClick = true
    lastClick = Date.now()
  }
}
function likePic() {
  heartInsidePic.classList.add('show')
  heartInsidePic.classList.add('animation')
  footerLike.classList.add('active')
  setTimeout(() => {
    clickTimes++
    times.innerText = clickTimes
    heartInsidePic.classList.toggle('show')
    heartInsidePic.classList.toggle('animation')
    let nextImage = image.url
    if (image.selected == 'v2') {
      nextImage = nextImage + image.v1
      image.selected = 'v1'
    } else {
      nextImage = nextImage + image.v2
      image.selected = 'v2'
    }
    likeMe.style.backgroundImage = `url(${nextImage})`
    footerLike.classList.remove('active')
  }, 1000)
}
