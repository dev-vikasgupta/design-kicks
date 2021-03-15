// Progress Steps
function initProgressSteps() {
  const projectFolders = [
    'analog-clock',
    'background-slider',
    'vertical-slider',
    'product-carousel',
    'drag-n-drop',
    'drawing-pad',
    'notes-app',
    'animated-counter',
    'drink-water-app',
    'password-generator',
    'password-strength-checker',
    'animated-countdown',
    'loading-icon',
    'content-placeholder',
    'mobile-tab-navbar',
    'insta-like',
    'box-animation',
    'accordians',
    'hoverboard',
    'custom-checkboxes',
    'auto-typing-effect',
    'sticky-nav',
    'forms-ui',
    'lazy-loading',
    'menu-animation',
    'github-profiles',
    'movie-app',
    'nav-animation',
    'random-choice-picker',
    'random-quotes',
    'ripple-effect',
    'scroll-animation',
    'short-input-widget',
    'sound-board',
    'split-landing-page',
    'toast-notification',
    'step-counters',
  ]
  const projects = document.getElementById('projects')
  let projectsUI = ``
  projectFolders.forEach((project, idx) => {
    const projectName = project.split('-').join(' ')
    const projectImage = `./${projectFolders[idx]}/project.png`
    const projectUIElement = `<div class="project">
            <div class="projectTitle">${projectName}</div>
            <img src="${projectImage}" />
            <div class="project-details">
                <h2>${projectName}</h2>
                <button>Live Demo</button>
            </div>
        </div>`
    projectsUI += projectUIElement
  })
  projects.innerHTML = projectsUI
  const project = document.querySelectorAll('.project')
  project.forEach((p, idx) => {
    const liveDemoButton = p.querySelector('.project-details button')
    liveDemoButton.addEventListener('click', () => {
      const url = `${window.location.origin}/${projectFolders[idx]}`
      const tab = window.open(url, '_blank')
    })
  })
}
initProgressSteps()
