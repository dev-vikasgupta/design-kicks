function initAccordions() {
  const accordions = document.querySelectorAll('#accordions .accordion')
  const accordionButtons = document.querySelectorAll(
    '#accordions .accordion > .accordion-btn'
  )
  accordionButtons.forEach((accordionButton, index) => {
    accordionButton.addEventListener('click', function () {
      this.parentNode.classList.toggle('active')
    })
  })
}
initAccordions()
