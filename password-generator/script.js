const randomFn = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
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
