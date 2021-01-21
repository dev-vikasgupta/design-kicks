;(function () {
  const API_URL = 'https://api.themoviedb.org/3'
  let page = 1
  const API_KEY = 'a8d570bd99eb28481bb0b7ce8c39baf2'
  const MOVIE_LIST = '/discover/movie?sort_by=popularity.desc'
  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
  const MOVIE_LIST_API_URL = `${API_URL}${MOVIE_LIST}&api_key=${API_KEY}&page=${page}`
  const SEARCH_API = `${API_URL}/search/movie?api_key=${API_KEY}&query=`
  const searchForm = document.getElementById('form')

  const createMovieCard = (movieData) => {
    const { title, overview, vote_average, poster_path } = movieData
    const movieCard = document.createElement('div')
    movieCard.classList.add('movie')

    const movieImage = document.createElement('img')
    movieImage.setAttribute('src', IMG_PATH + '/' + poster_path)
    movieCard.append(movieImage)

    const movieInfo = document.createElement('div')
    movieInfo.classList.add('movie-info')

    const movieTitle = document.createElement('h3')
    movieTitle.innerText = title

    const rating = document.createElement('span')
    let ratingClass = ''
    if (vote_average >= 8) {
      ratingClass = 'green'
    } else if (vote_average >= 5) {
      ratingClass = 'orange'
    } else {
      ratingClass = 'red'
    }
    rating.classList.add(ratingClass)
    rating.innerText = vote_average

    const movieOverview = document.createElement('div')
    movieOverview.classList.add('overview')

    const movieOverviewTitle = document.createElement('h3')
    movieOverviewTitle.innerText = 'Overview'

    movieOverview.append(movieOverviewTitle)
    movieOverview.append(overview)

    movieInfo.append(movieTitle)
    movieInfo.append(rating)

    movieCard.append(movieInfo)
    movieCard.append(movieOverview)
    return movieCard
  }

  const renderMovies = (movies) => {
    const moviesContainer = document.getElementById('main')
    moviesContainer.innerHTML = ''
    movies.forEach((movie) => {
      const movieCard = createMovieCard(movie)
      moviesContainer.append(movieCard)
    })
  }

  const fetchMovies = async (URL) => {
    const res = await fetch(URL)
    const movies = await res.json()
    renderMovies(movies.results)
  }
  const searchMovie = async () => {
    const searchText = document.getElementById('search').value
    const SEARCH_URL = `${SEARCH_API}${searchText}`
    const movies = fetchMovies(SEARCH_URL)
  }
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    searchMovie()
  })
  fetchMovies(MOVIE_LIST_API_URL)
})()
