const resultEl = document.getElementById('result')
const clipboardEl = document.getElementById('clipboard')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateBtn = document.getElementById('generate')

generateBtn.addEventListener('click', () => {
  const length = +lengthEl.value
  const uppercase = uppercaseEl.checked
  const lowercase = lowercaseEl.checked
  const numbers = numbersEl.checked
  const symbols = symbolsEl.checked
  resultEl.innerText = generatePassword(
    uppercase,
    lowercase,
    numbers,
    symbols,
    length
  )
})
const randomFn = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}
function generatePassword(upper, lower, number, symbol, length) {
  let result = ''
  const typeCount = upper + lower + number + symbol
  if (!typeCount) return result
  const typeArr = [{ upper }, { lower }, { number }, { symbol }].filter(
    (type) => Object.values(type)[0]
  )
  for (let i = 0; i < length; i += typeCount) {
    typeArr.forEach((type) => {
      const [typeOfCharacter] = Object.keys(type)
      result += randomFn[typeOfCharacter]()
    })
  }
  return result
}
function getRandomLower() {
  /** 
        total alphabets are 26.
        ASCII Code for a is 97 and z is 122
     */
  const randomAlphabetCode = Math.floor(Math.random() * 26) + 97
  return String.fromCharCode(randomAlphabetCode)
}
function getRandomUpper() {
  /** 
        total alphabets are 26.
        ASCII Code for A is 65 and Z is 90
     */
  const randomAlphabetCode = Math.floor(Math.random() * 26) + 65
  return String.fromCharCode(randomAlphabetCode)
}
function getRandomNumber() {
  return Math.floor(Math.random() * 9)
}
function getRandomSymbol() {
  const symbols = '!@#$%^&*()'
  const randomSymbolIndex = Math.floor(Math.random() * symbols.length)
  return symbols[randomSymbolIndex]
}
