(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // fillNotePage.js
  var require_fillNotePage = __commonJS({
    "fillNotePage.js"(exports, module) {
      var fillNotePage2 = (note) => {
        document.querySelector("#individual-note-page-title").innerText = note.title;
        document.querySelector("#individual-note-page-content").innerText = note.content;
      };
      module.exports = fillNotePage2;
    }
  });

  // hidePage.js
  var require_hidePage = __commonJS({
    "hidePage.js"(exports, module) {
      var hidePage = (element) => {
        if (element.style.display === "none") {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      };
      module.exports = hidePage;
    }
  });

  // addNewNote.js
  var require_addNewNote = __commonJS({
    "addNewNote.js"(exports, module) {
      var fillNotePage2 = require_fillNotePage();
      var hidePage = require_hidePage();
      var addNewNote2 = (noteObject, idx) => {
        const main = document.querySelector("#main-page");
        const individualpage = document.querySelector("#individual-note-page");
        const newNoteEl = document.createElement("div");
        const newId = idx + 1;
        const textWithLimit = `${noteObject.title}: ${noteObject.content}`.slice(0, 20);
        newNoteEl.innerText = `${textWithLimit}...`;
        newNoteEl.className = "note";
        newNoteEl.id = "note-" + newId;
        main.appendChild(newNoteEl);
        newNoteEl.addEventListener("click", () => {
          currentNoteIndex = idx;
          fillNotePage2(noteObject);
          hidePage(main);
          hidePage(individualpage);
        });
      };
      module.exports = addNewNote2;
    }
  });

  // index.js
  var addNewNote = require_addNewNote();
  var fillNotePage = require_fillNotePage();
  var mainPage = document.querySelector("#main-page");
  var individualNotePage = document.querySelector("#individual-note-page");
  document.querySelector("#icon").addEventListener("click", () => {
    mainPage.style.display = "block";
    individualNotePage.style.display = "none";
  });
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
