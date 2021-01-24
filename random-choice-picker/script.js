function initRandomChoicePicker() {
  const textArea = document.querySelector('#random-choice-picker #textarea')
  const tagsElm = document.querySelector('#random-choice-picker #tags')
  textArea.focus()
  textArea.addEventListener('keyup', function (event) {
    const { value } = event.target
    createTag(value)
    if (event.key === 'Enter') {
      setTimeout(() => {
        event.target.value = ''
      }, 10)
      randomSelect(value)
    }
  })
  const createTag = (data) => {
    let tags = data
      .split(',')
      .filter(function (value) {
        return value.trim() !== ''
      })
      .map(function (value) {
        return value.trim()
      })
    tagsElm.innerHTML = ''
    tags.forEach((tag) => {
      const tagElement = document.createElement('span')
      tagElement.classList.add('tag')
      tagElement.innerText = tag
      tagsElm.append(tagElement)
    })
  }
  const randomSelect = (data) => {
    console.log('Enter hit', data)
    const noOfTimes = 30
    const highlightTime = 100 // in ms
    const interval = setInterval(() => {
      const randomTag = pickRandomTag()
      highlightTag(randomTag)
      setTimeout(() => {
        unHighlightTag(randomTag)
      }, highlightTime)
    }, noOfTimes)
    setTimeout(() => {
      clearInterval(interval)
      setTimeout(() => {
        const randomTag = pickRandomTag()
        highlightTag(randomTag)
      }, highlightTime)
    }, noOfTimes * highlightTime)
  }
  const pickRandomTag = () => {
    const tags = tagsElm.childNodes
    return tags[Math.floor(Math.random() * tags.length)]
  }
  const highlightTag = (tag) => {
    tag.classList.add('highlight')
  }
  const unHighlightTag = (tag) => {
    tag.classList.remove('highlight')
  }
  const unHighlightTagAll = (tag) => {
    const tags = tagsElm.childNodes
    tags.forEach((tag) => {
      unHighlightTag(tag)
    })
    tag.classList.remove('highlight')
  }
}
initRandomChoicePicker()
