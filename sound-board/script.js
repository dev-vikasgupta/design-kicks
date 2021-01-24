function initSoundCard() {
  const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
  sounds.forEach((soundItem) => {
    const button = document.createElement('button')
    button.classList.add('btn')
    button.innerText = soundItem
    button.addEventListener('click', () => {
      stopSounds()
      document.querySelector(`#sound-board > #${soundItem}`).play()
    })
    document.querySelector('#sound-board > #buttons').appendChild(button)
  })
  const stopSounds = function () {
    sounds.forEach((soundItem) => {
      const soundBar = document.querySelector(`#sound-board > #${soundItem}`)
      soundBar.pause()
      soundBar.currentTime = 0
    })
  }
}
initSoundCard()
