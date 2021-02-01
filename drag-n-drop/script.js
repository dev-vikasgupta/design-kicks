;(function () {
  const draggableItem = document.querySelector('.fill')
  const emptyBoxes = document.querySelectorAll('.empty')

  draggableItem.addEventListener('dragstart', dragStart)
  draggableItem.addEventListener('dragend', dragEnd)

  for (const box of emptyBoxes) {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragleave', dragLeave)
    box.addEventListener('dragover', dragOver)
    box.addEventListener('drop', dragDrop)
  }

  function dragStart() {
    this.className += ' hold'
    setTimeout(() => {
      this.className = 'invisible'
    }, 1)
  }

  function dragEnd() {
    this.className = 'fill'
  }

  function dragEnter(e) {
    e.preventDefault()
    this.className += ' hover-shadow'
  }

  function dragLeave(e) {
    this.className = 'empty'
  }
  // default behaviour of dragover is to prevent dropping over the box
  function dragOver(e) {
    e.preventDefault()
  }

  function dragDrop() {
    this.className = 'empty' // 1. Make the place empty
    this.append(draggableItem) // 2. Add the draggable item to the box
  }
})()
