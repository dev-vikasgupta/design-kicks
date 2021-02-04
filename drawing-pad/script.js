;(function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  ctx.font = '30px Arial'
  ctx.fillText(
    'Start Drawing by holding mouse.',
    canvas.width / 4,
    canvas.height / 2
  )
  ctx.textAlign = 'center'
  // Toolbox elements
  const increaseBrushSizeBtn = document.getElementById('increase-line-size-btn')
  const decreaseBrushSizeBtn = document.getElementById('decrease-line-size-btn')
  const colorPicker = document.getElementById('color')
  const clearBtn = document.getElementById('clear')

  let size = 10
  let color = 'black'
  let isPenHold = false
  let x, y
  /** When you start holding point in canvas */
  canvas.addEventListener('mousedown', (e) => {
    isPenHold = true
    x = e.offsetX
    y = e.offsetY
  })
  /** When you leave point in canvas */
  canvas.addEventListener('mouseup', (e) => {
    isPenHold = false
    x = undefined
    y = undefined
  })
  /** The time, you actually hold, before you leave point in canvas */
  canvas.addEventListener('mousemove', (e) => {
    if (isPenHold) {
      const x2 = e.offsetX
      const y2 = e.offsetY
      drawCircle(x, y)
      drawLine(x, y, x2, y2)
      x = x2 // last x should be new x
      y = y2 // last y should be new y
    }
  })
  increaseBrushSizeBtn.addEventListener('click', () => {
    if (size === 20) return
    size += 5
    updateSizeLabel(size)
  })
  decreaseBrushSizeBtn.addEventListener('click', () => {
    if (size === 5) return
    size -= 5
    updateSizeLabel(size)
  })
  clearBtn.addEventListener('click', () => {
    const { width, height } = canvas
    ctx.clearRect(0, 0, width, height)
  })
  colorPicker.addEventListener('change', (e) => {
    color = e.target.value
  })
  function updateSizeLabel(newSize) {
    const brushSizeLabel = document.getElementById('line-size')
    brushSizeLabel.innerText = newSize
  }
  function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
  }
  function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
  }
})()
