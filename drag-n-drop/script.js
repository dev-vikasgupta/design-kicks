;(function () {
  const draggableItem = document.querySelector('.fill')

  draggableItem.addEventListener('dragstart', dragStart)
  draggableItem.addEventListener('dragend', dragEnd)

  function dragStart() {
    console.log('dragging start')
  }

  function dragEnd() {
    console.log('dragging end')
  }
})()
