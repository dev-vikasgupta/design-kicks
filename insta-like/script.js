const likeMe = document.querySelector('.likeMe')
const heartInsidePic = document.querySelector('.likeMe .fa-heart')
const times = document.querySelector('#times')
let clickTimes = 0
const image = {
  url: 'https://picsum.photos/',
  v1: '300/440',
  v2: '301/441',
  selected: 'v1',
}
const imageFlag = false
likeMe.addEventListener('dblclick', (e) => {
  heartInsidePic.classList.add('show')
  heartInsidePic.classList.add('animation')
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
  }, 1000)
})
