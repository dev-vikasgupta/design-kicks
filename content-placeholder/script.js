;(function () {
  const header = document.querySelector('#header img')
  const title = document.querySelector('#title h3')
  const excerpt = document.querySelector('#excerpt .data')
  const profileImg = document.querySelector('#profile_img img')
  const name = document.getElementById('name')
  const date = document.getElementById('date')
  const loadingUI = document.querySelectorAll('.animated-bg')

  const serverData = {
    bgImage:
      'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    title: 'Lorem ipsum dolor sit amet.',
    excerpt:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, ipsa!',
    profileImage: 'https://randomuser.me/api/portraits/men/45.jpg',
    name: 'John Doe',
    lastUpdated: 'Nov 19, 2020',
  }
  initData(serverData)
  function initData(data) {
    header.classList.add('contentIsLoading')
    setTimeout(() => {
      setData(data)
      hideLoader()
    }, 3000)
  }
  function setData(data) {
    header.setAttribute('src', data.bgImage)
    header.classList.remove('contentIsLoading')
    title.innerText = data.title
    excerpt.innerText = data.excerpt
    profileImg.setAttribute('src', data.profileImage)
    name.innerText = data.name
    date.innerText = data.lastUpdated
  }
  function hideLoader() {
    loadingUI.forEach((load) => {
      load.classList.remove('animated-bg')
    })
  }
})()
