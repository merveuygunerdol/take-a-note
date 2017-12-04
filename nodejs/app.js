console.log('Starting app');

const fs = require('fs'); // fetch all contents of fs module and store them in fs var // we can access all functions of fs
const _ = require('lodash');

const notes = require('./notes');

const command = process.argv[2]; //grab command line info
console.log('Command;', command);

if (command === 'add') {
  console.log('Adding a new note');
} else if (command === 'list') {
  console.log('Listing all notes');
} else if (command === 'remove') {
  console.log('Note is removed');
} else if (command === 'read') {
  console.log('Readig note');
} else {
  console.log('Command not recognized');
}
