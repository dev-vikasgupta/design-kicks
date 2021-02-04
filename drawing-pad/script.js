;(function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  let size = 20
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
