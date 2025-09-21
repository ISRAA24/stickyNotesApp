const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const noteController = require('./controllers/note.controller');
// Connect to MongoDB
const url = 'mongodb+srv://esraaahmedawadsd23_db_user:4g0AqwTiqpcOgzXW@notes.1hlsq1m.mongodb.net/stickyNotes?retryWrites=true&w=majority&appName=Notes';
mongoose.connect(url).then(() => {
    console.log('connected to mongodb')
}).catch((err) => {
    console.log(err);
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


const noteRouter = require('./routes/notes.route');
app.use('/api/notes',noteRouter); // http://localhost:4001/api/courses

app.post('/add', noteController.createNote);
app.get('/add', noteController.renderAddPage);
app.get('/', noteController.getAllNotes);
app.delete('/id', noteController.deleteNoteFromForm);

// Add this to your index.js for testing
// app.get('/test-redirect', (req, res) => {
//   console.log('Test redirect called');
//   res.redirect('/');
// });

app.listen(4001 , () => {
    console.log('listening on port:4001');
    
});