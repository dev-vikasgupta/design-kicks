const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')
const toggle = document.querySelectorAll('.toggle')

toggle.forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => checkStatus(e.target))
})

function checkStatus(checkedElm) {
  const isGoodChecked = good.checked
  const isCheapChecked = cheap.checked
  const isFastChecked = fast.checked
  if (isGoodChecked && isCheapChecked && isFastChecked) {
    if (checkedElm == good) {
      fast.checked = false
    }
    if (checkedElm == cheap) {
      good.checked = false
    }
    if (checkedElm === fast) {
      cheap.checked = false
    }
  }
}
