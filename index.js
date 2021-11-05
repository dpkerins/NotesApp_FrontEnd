const addNewNote = require('./addNewNote');

fetch('http://localhost:3000/notes')
  .then(response => response.json())
  .then(data => {
    data.forEach((value, index) => {
      addNewNote(value, index);
    })
  });