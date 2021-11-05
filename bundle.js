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
  var noteButton = document.querySelector("#new-note-button");
  noteButton.addEventListener("click", () => {
    let noteTitle = document.querySelector("#new-note-title").value;
    let noteContent = document.querySelector("#new-note-content").value;
    let noteIdNumber = document.querySelectorAll(".note").length;
    let noteObject = {
      title: noteTitle,
      content: noteContent
    };
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(noteObject)
    }).then((response) => response.json()).then((data) => {
      console.log("Success:", data);
    }).then(() => {
      addNewNote(noteObject, noteIdNumber);
    });
  });
})();
