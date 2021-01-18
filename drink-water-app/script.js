;(function () {
  const cups = document.querySelectorAll('.cup-small')
  const litres = document.getElementById('litre')
  const percentage = document.getElementById('percentage')
  const remained = document.getElementById('remained')
  const capacity = 2000
  const glassHeight = 330
  cups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCup(idx))
  })
  const convertToLitre = (quantity) => `${quantity / 1000}L`
  litres.innerText = convertToLitre(capacity)
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
  const totalDrankFilledHeight = (drankPercent) =>
    glassHeight * (drankPercent / 100)
  const highlightCup = (idx) => {
    const currentSelectedCup = idx
    const isItFilled = cups[idx].classList.contains('full')
    cups.forEach((cup, idx) => {
      if (currentSelectedCup !== idx) cup.classList.remove('full')
    })
    let totalDrank = 0
    if (isItFilled) {
      idx--
      totalDrank = currentSelectedCup * 250
    } else {
      totalDrank = (currentSelectedCup + 1) * 250
    }
    const totalDrankInPercentage = (totalDrank / capacity) * 100
    const totalRemained = (capacity - totalDrank) / 1000
    litres.innerText = `${totalRemained}L`
    percentage.innerText = `${totalDrankInPercentage}%`
    cups[currentSelectedCup].classList.toggle('full')
    console.log('scale', scale(totalDrank, 0, capacity, 0, 100))
    percentage.style.height = `${totalDrankFilledHeight(
      totalDrankInPercentage
    )}px`
    while (idx > -1) {
      cups[idx].classList.add('full')
      idx--
    }
  }
})()
