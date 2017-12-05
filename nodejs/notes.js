console.log('Starting notes.js');

let fs = require('fs');

let addNote = (title, body) => {
  let allNotes = [];
  let note = {
    title,
    body,
  };

  try {
    let notesString = fs.readFileSync('notes-data.json');
    allNotes = JSON.parse(notesString);
  } catch(e) {

  } // try => loads the file

  let duplicateNotes = allNotes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    allNotes.push(note); // first writefilesync
    fs.writeFileSync('notes-data.json', JSON.stringify(allNotes));
  }
}; // => saves the file

const getAll = () => {
  console.log('Listing all notes');
};

const removeNote = (title) => {
  console.log('Removing the note: Title:', title);
};

const readNote = (title, body) => {
  console.log('Reading the note: Title:', title, 'Body:', body);
};

module.exports = {
  addNote,
  getAll,
  removeNote,
  readNote,
};
