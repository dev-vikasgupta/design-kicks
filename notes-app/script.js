const addBtn = document.getElementById('add')
const LS_KEY = 'notes'
const emptyTemplate = `
### How to Use it effectively?
**For Heading**<br>
   Type '#'  followed by space then Type<br>
**For Sub-Heading**<br>
Type '##'  followed by space then Type<br>
**For Bulleted List**<br>
Type '-' followed by space then Type<br>
**For *italic* Text**<br>
Wrap your text with '*' with no spaces<br>
example: \\*italic text\\* <br>
**For Bold Text**\<br>
Wrap your text with '**' with no spaces<br>
example: \\*\\*bold text\\*\\*
`
addBtn.addEventListener('click', () => addNewNote())
initNotesFromLS()
function addNewNote(text = '', isNew = true) {
  const note = document.createElement('div')
  note.classList.add('note')
  const isNewNote = isNew ? 'save' : 'edit'
  note.innerHTML = `
            <div class="tools ${isNew ? 'save' : ''}">
            <button class="edit"><i class="fas fa-${isNewNote}"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main ${text ? '' : 'hidden'}">${marked(text)}</div>
        <textarea class="${text ? 'hidden' : ''}">${text}</textarea>
    `
  const editBtn = note.querySelector('.edit')
  const deleteBtn = note.querySelector('.delete')
  const textarea = note.querySelector('textarea')

  editBtn.addEventListener('click', () => editNote(note))
  deleteBtn.addEventListener('click', () => removeNote(note))
  textarea.addEventListener('input', (e) => updateVisibleNote(e, note))
  document.body.appendChild(note)
}
function editNote(note) {
  const main = note.querySelector('.main')
  const textarea = note.querySelector('textarea')
  const toolbar = note.querySelector('.tools')
  const editBtnIcon = toolbar.querySelector('.edit i')
  if (textarea.classList.length) {
    editBtnIcon.classList.remove('fa-edit')
    editBtnIcon.classList.add('fa-save')
  } else {
    editBtnIcon.classList.remove('fa-save')
    editBtnIcon.classList.add('fa-edit')
  }
  toolbar.classList.toggle('save')
  main.classList.toggle('hidden')
  textarea.classList.toggle('hidden')
}
function updateVisibleNote(event, note) {
  const { value } = event.target
  const visibleNote = note.querySelector('.main')
  visibleNote.innerHTML = marked(value)
  updateLS()
}

function removeNote(note) {
  note.remove()
  updateLS()
}
function initNotesFromLS() {
  const notes = JSON.parse(localStorage.getItem(LS_KEY))
  if (notes && notes.length) {
    notes.forEach((note) => addNewNote(note, false))
  } else {
    addNewNote(emptyTemplate, false)
  }
}

function updateLS() {
  const notesTexts = document.querySelectorAll('textarea')
  const notes = []
  notesTexts.forEach((note) => {
    const { value } = note
    if (value && value.length && value.trim().length) {
      notes.push(value)
    }
  })
  localStorage.setItem(LS_KEY, JSON.stringify(notes))
}
