const express = require('express')
const app = express()
bodyParser = require('body-parser')
const notes = require('./notes');

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })
  app.get('/add_note', function(req, res) {
    const body = req.query['body'];
    const title = req.query['title'];
    let note = notes.addNote(title, body);
    res.send('NOTE SAVED!');
});

app.listen(3000, () => console.log('Note Taking App listening on port 3000!'))
