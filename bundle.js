(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // addNewNote.js
  var require_addNewNote = __commonJS({
    "addNewNote.js"(exports, module) {
      var addNewNote2 = (noteObject, idx) => {
        const newNoteEl = document.createElement("div");
        const newId = idx + 1;
        const textWithLimit = `${noteObject.title}: ${noteObject.content}`.slice(0, 20);
        newNoteEl.innerText = `${textWithLimit}...`;
        newNoteEl.className = "note";
        newNoteEl.id = "note-" + newId;
        document.body.appendChild(newNoteEl);
      };
      module.exports = addNewNote2;
    }
  });

  // index.js
  var addNewNote = require_addNewNote();
  fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
    data.forEach((value, index) => {
      addNewNote(value, index);
    });
  });
})();
