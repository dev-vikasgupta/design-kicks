;(function () {
  const showNotificationBtn = document.getElementById('button')
  const toastContainer = document.querySelector('.toasts')
  showNotificationBtn.addEventListener('click', () => showNotification())

  const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
  ]
  const types = ['success', 'danger', 'warning', 'info']
  function showNotification(message = null, type = null) {
    const toast = document.createElement('div')
    const typeClass = type ? type : randomMessageType()
    toast.classList.add('toast')
    toast.classList.add(typeClass)
    toast.innerText = message ? message : randomMessage()
    toastContainer.append(toast)
    setTimeout(() => {
      toast.style.opacity = 0
      setTimeout(() => {
        toast.remove()
      }, 500)
    }, 3000)
  }
  function randomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
  }
  function randomMessageType() {
    return types[Math.floor(Math.random() * types.length)]
  }
})()
