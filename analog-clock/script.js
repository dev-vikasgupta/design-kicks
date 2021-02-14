;(() => {
  const hourNeedle = document.querySelector('.hour')
  const minuteNeedle = document.querySelector('.minute')
  const secondNeedle = document.querySelector('.second')

  const timeElm = document.querySelector('.time')
  const dateElm = document.querySelector('.date')
  const toggleBtn = document.querySelector('.toggle')

  const DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  // toggle theme modes
  toggleBtn.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    html.classList.toggle('dark')
    const innerText = this.innerText
    const isInDarkMode = html.classList.contains('dark')
    if (isInDarkMode) {
      e.target.innerText = 'Light Mode'
    } else {
      e.target.innerText = 'Dark Mode'
    }
  })
  setInterval(() => {
    setTime()
  }, 1000)

  function setTime() {
    const date = new Date()
    let hour = date.getHours() % 12
    let meridiem = 'AM'
    if (hour >= 12) {
      meridiem = 'PM'
      hour = hour % 12
    }
    const min = date.getMinutes()
    const sec = min * 60 + date.getSeconds()

    const day = date.getDay()
    const month = date.getMonth()
    const monthDay = date.getDate()

    hourNeedle.style.transform = `translate(-50%, -100%) rotate(${
      30 * hour
    }deg)`
    minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${
      6 * min
    }deg)`
    secondNeedle.style.transform = `translate(-50%, -100%) rotate(${
      6 * sec
    }deg)`

    dateElm.innerHTML = `${DAYS[day]}, ${MONTHS[month]} <span class="circle">${monthDay}</span>`
    timeElm.innerHTML = `${formatNumber(hour)}:${formatNumber(min)} ${meridiem}`
  }

  function formatNumber(number) {
    return number.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })
  }
})()
