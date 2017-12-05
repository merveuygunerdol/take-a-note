console.log('Starting notes.js');

const addNote = (title, body) => {
  console.log('Adding note: Title:', title, 'Body:', body);
};

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
