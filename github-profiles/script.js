const APIURL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username)
    createUserCard(data)
    getRepos(username)
  } catch (error) {
    createErrorCard(
      `We couldn’t find any repositories matching username <strong>${username}</strong>`
    )
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + '/repos?sort=created')
    addReposToCard(data)
  } catch (error) {
    createErrorCard(
      `We couldn’t find any repositories matching username <strong>${username}</strong>`
    )
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const searchValue = search.value
  if (searchValue) {
    getUser(searchValue)
    search.value = ''
  }
})

function createUserCard(user) {
  const { avatar_url, name, bio, followers, following, public_repos } = user
  const cardHTML = `<div class="card">
            <div>
                <img src="${avatar_url}" alt="" class="avatar">
            </div>
            <div class="user-info">
                <h2>${name}</h2>
                <p>${bio}</p>
                
                <ul>
                    <li>${followers} <strong>Followers</strong></li>
                    <li>${following} <strong>Following</strong></li>
                    <li>${public_repos} <strong>Repos</strong></li>
                </ul>

                <div id="repos" class="repos"></div>
            </div>
        </div>`
  main.innerHTML = cardHTML
}

function createErrorCard(errorMessage) {
  const cardHTML = `
        <div class="card">
            <p>${errorMessage}</p>
        </div>
    `
  main.innerHTML = cardHTML
}

function addReposToCard(repos) {
  const resposContainer = document.getElementById('repos')
  resposContainer.innerHTML = ''
  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement('a')
    repoEl.classList.add('repo')
    repoEl.href = repo.html_url
    repoEl.target = '_blank'
    repoEl.innerText = repo.name
    resposContainer.append(repoEl)
  })
}
