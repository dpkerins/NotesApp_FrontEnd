const fillNotePage = (note) => {
  document.querySelector('#individual-note-page-title').innerText = note.title;
  document.querySelector('#individual-note-page-content').innerText = note.content;
}

module.exports = fillNotePage;