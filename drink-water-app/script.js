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
    const isNextFilled =
      cups[idx].nextElementSibling &&
      cups[idx].nextElementSibling.classList.contains('full')
    let totalDrank = 0
    if (isItFilled && !isNextFilled) {
      idx--
      totalDrank = currentSelectedCup * 250
    } else {
      totalDrank = (currentSelectedCup + 1) * 250
    }
    cups.forEach((cup, idxLoop) => {
      if (idxLoop <= idx) {
        cup.classList.add('full')
      } else {
        cup.classList.remove('full')
      }
    })
    const totalDrankInPercentage = (totalDrank / capacity) * 100
    // Total Remained in Litre
    const totalRemained = (capacity - totalDrank) / 1000
    litres.innerText = `${totalRemained}L`
    // Total Drank in Percentage
    percentage.innerText = `${totalDrankInPercentage}%`
    if (capacity === totalDrank) {
      remained.style.display = 'none'
    } else {
      remained.style.display = 'flex'
    }
    if (!totalDrank) {
      percentage.style.visibility = 'hidden'
      percentage.style.height = `0px`
    } else {
      percentage.style.visibility = 'visible'
      percentage.style.height = `${totalDrankFilledHeight(
        totalDrankInPercentage
      )}px`
    }
  }
})()
