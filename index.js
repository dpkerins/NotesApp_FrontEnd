const addNewNote = require('./addNewNote');

fetch('http://localhost:3000/notes')
  .then(response => response.json())
  .then(data => {
    data.forEach((value, index) => {
      addNewNote(value, index);
    })
  });

const noteButton = document.querySelector('#new-note-button');
noteButton.addEventListener('click', () => {
  let noteTitle = document.querySelector('#new-note-title').value;
  let noteContent = document.querySelector('#new-note-content').value;
  let noteIdNumber = document.querySelectorAll('.note').length;
  let noteObject = {
    title: noteTitle,
    content: noteContent
  };

  fetch('http://localhost:3000/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(noteObject),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .then(() => {
      addNewNote(noteObject, noteIdNumber);
    })
})