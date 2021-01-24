function initAnimatedCounters() {
  const updateCounter = function (counter) {
    const target = counter.getAttribute('data-target')
    let c = +counter.innerText
    const speed = 100
    const incrementNumberBy = target / speed
    if (c < target) {
      c = Math.ceil(`${c + incrementNumberBy}`)
      counter.innerText = c < target ? c : target
      setTimeout(() => {
        updateCounter(counter)
      }, 1)
    } else {
      counter.innerText = c
    }
  }
  const counters = document.querySelectorAll('.counter')
  counters.forEach((counter) => {
    counter.innerText = 0
    updateCounter(counter)
  })
}
initAnimatedCounters()
