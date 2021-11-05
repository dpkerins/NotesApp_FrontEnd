const addNewNote = (noteObject, idx) => {
  const newNoteEl = document.createElement('div');
  const newId = idx + 1;
  newNoteEl.innerText = `${noteObject.title}: ${noteObject.content}`;
  newNoteEl.className = 'note';
  newNoteEl.id = 'note-' + newId;
  document.body.appendChild(newNoteEl);
}



module.exports = addNewNote;