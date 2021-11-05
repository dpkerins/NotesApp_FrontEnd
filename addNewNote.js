const fillNotePage = require('./fillNotePage');
const hidePage = require('./hidePage');

const addNewNote = (noteObject, idx) => {
  const main = document.querySelector('#main-page');
  const individualpage = document.querySelector('#individual-note-page');
  const newNoteEl = document.createElement('div');
  const newId = idx + 1;
  const textWithLimit = `${noteObject.title}: ${noteObject.content}`.slice(0, 20);
  newNoteEl.innerText = `${textWithLimit}...`;
  newNoteEl.className = 'note';
  newNoteEl.id = 'note-' + newId;
  main.appendChild(newNoteEl);
  newNoteEl.addEventListener('click', () => {
    currentNoteIndex = idx;
    fillNotePage(noteObject);
    hidePage(main);
    hidePage(individualpage);
  });
}



module.exports = addNewNote;