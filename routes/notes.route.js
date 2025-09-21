const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note.controller');
const { validationSchema } = require('../middleware/validationSchema');

router.route('/')
    .get(noteController.getAllNotes)
    .post(noteController.createNote);

router.route('/:id')
            .delete(noteController.deleteNote);


module.exports = router;