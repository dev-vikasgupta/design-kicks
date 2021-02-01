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

  function dragEnter() {
    console.log('Enter')
  }

  function dragLeave() {
    console.log('Leave')
  }

  function dragOver() {
    console.log('Over')
  }

  function dragDrop() {
    console.log('Drop')
  }
})()
