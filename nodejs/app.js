console.log('Starting app');

const fs = require('fs'); // fetch all contents of fs module and store them in fs var // we can access all functions of fs
const _ = require('lodash');
const yargs = require('yargs'); // parsing arguments

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0]; // grab command line info
console.log('Command;', command);
console.log('Yargs;', argv);

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log(`Note Created -- Title: ${note.title} -- Body: ${note.body}`);
  } else {
    console.log('Please Change The Title-Duplicate Title')
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else if (command === 'read') {
  notes.readNote(argv.title, argv.body);
} else {
  console.log('Command not recognized');
}
