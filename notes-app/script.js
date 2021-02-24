const addBtn = document.getElementById('add')

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
  const note = document.createElement('div')
  note.classList.add('note')
  note.innerHTML = `
            <div class="tools">
            <button class="edit"><i class="fas fa-save"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main ${text ? '' : 'hidden'}">${marked(text)}</div>
        <textarea class="${text ? 'hidden' : ''}">${text}</textarea>
    `
  const editBtn = note.querySelector('.edit')
  const deleteBtn = note.querySelector('.delete')
  const textarea = note.querySelector('textarea')

  editBtn.addEventListener('click', () => editNote(note))
  deleteBtn.addEventListener('click', () => note.remove())
  textarea.addEventListener('input', (e) => updateVisibleNote(e, note))
  document.body.appendChild(note)
}
function editNote(note) {
  const main = note.querySelector('.main')
  const textarea = note.querySelector('textarea')
  const toolbar = note.querySelector('.tools')
  const editBtnIcon = toolbar.querySelector('.tools .edit i')
  if (textarea.classList.length) {
    editBtnIcon.classList.remove('fa-edit')
    editBtnIcon.classList.add('fa-save')
    toolbar.style.backgroundColor = 'seagreen'
  } else {
    editBtnIcon.classList.remove('fa-save')
    editBtnIcon.classList.add('fa-edit')
    toolbar.style.backgroundColor = '#9ec862'
  }
  main.classList.toggle('hidden')
  textarea.classList.toggle('hidden')
}
function updateVisibleNote(event, note) {
  const { value } = event.target
  const visibleNote = note.querySelector('.main')
  visibleNote.innerHTML = marked(value)
}
