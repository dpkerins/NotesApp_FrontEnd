/**
 * @jest-environment jsdom
 */

const addNewNote = require('./addNewNote');

test('displays a note', () => {
  addNewNote({title: 'New Title', content: 'This is really good content.'});

  expect(document.querySelectorAll('.note').length).toBe(1);
});
