console.log('Starting notes.js');

let fs = require('fs');

let fetchNotes = () => { // fetching notes from the file
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return []; // catch runs if try fails
  } // try => loads the file
};

let saveNotes = (allNotes) => { // get allNotes param -you want to save the file systm
  fs.writeFileSync('notes-data.json', JSON.stringify(allNotes));
};

let addNote = (title, body) => {
  let allNotes = fetchNotes();
  let note = {
    title,
    body,
  };

  let duplicateNotes = allNotes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    allNotes.push(note); // first writefilesync
    saveNotes(allNotes);
    return note;
  }
}; // => saves the file

const getAll = () => {
  console.log('Listing all notes');
};

const removeNote = (title) => {
  let allNotes = fetchNotes();
  let filteredNotes = allNotes.filter((note) => note.title !== title);
saveNotes(filteredNotes);
return allNotes.length !== filteredNotes.length;
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
