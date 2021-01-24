function initRandomQuotes() {
  const quotesSection = document.querySelector('#random-quotes .quote')
  const getAnotherQuoteBtn = document.querySelector(
    '#random-quotes .anotherQuote'
  )
  const quoteAuthor = document.querySelector('#random-quotes .author')
  // key used in local storage in store quotes
  const quoteStorageKey = 'm-quotes'
  let quotes = []
  // Check if quotes are already there
  const storedQuotes = JSON.parse(localStorage.getItem(quoteStorageKey))
  if (storedQuotes && storedQuotes.length > 0) {
    quotes = storedQuotes
  } else {
    localStorage.removeItem(quoteStorageKey)
  }
  const getRandomNumber = function (quotes) {
    const min = 0
    const max = quotes.length - 1
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  const setQuote = function (quoteObject) {
    quotesSection.innerText = quoteObject.text
    quoteAuthor.innerText =
      quoteObject.author != 'null'
        ? '- ' + quoteObject.author
        : '- ' + 'Anonymous'
  }
  const fetchQuote = function () {
    if (quotes.length) {
      const randomQuote = getRandomNumber(quotes)
      setQuote(quotes[randomQuote])
      return
    }
    const quoteApiUrl = 'https://type.fit/api/quotes'
    const reqConfig = {
      header: {
        Accept: 'application/json',
      },
    }
    fetch(quoteApiUrl, reqConfig)
      .then(function (res) {
        return res.json()
      })
      .then(function (data) {
        quotes = data
        localStorage.setItem(quoteStorageKey, JSON.stringify(data))
        setQuote(data[0])
      })
  }
  getAnotherQuoteBtn.addEventListener('click', fetchQuote)
  fetchQuote()
}
initRandomQuotes()
