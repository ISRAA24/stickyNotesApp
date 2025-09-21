const Note = require('../models/note_model'); // Use capital N for the model

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // Use Note with capital N
    console.log('Found notes:', notes.length);
    res.render('index', { notes });
  } catch (error) {
    console.error('Error fetching notes:', error);
    res.status(500).send('Error loading notes');
  }
}

const createNote = async (req, res) => {
  try {
    console.log('Received data:', req.body);
    const { title, content, color } = req.body;

    // Validation
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const newNote = new Note({ // Use Note with capital N and different variable name
      title: title.trim(),
      content: content.trim(),
      color: color || '#ffeb3b'
    });

    const savedNote = await newNote.save();
    console.log('Note saved successfully:', savedNote);
    res.redirect('/'); // Redirect to home page after form submission

    res.status(201).json(savedNote);
  } catch (error) {
    console.log('Error details:', error);
    res.status(500).json({ error: 'Error creating note', details: error.message });
  }
};

const createNoteFromForm = async (req, res) => {
  try {
    console.log('Form data received:', req.body);
    const { title, content, color } = req.body;

    // Validation
    if (!title || !content) {
      return res.status(400).send('Title and content are required');
    }

    const newNote = new Note({ // Use Note with capital N and different variable name
      title: title.trim(),
      content: content.trim(),
      color: color || '#ffeb3b'
    });

    await newNote.save();
    console.log('Note created from form successfully');
    if (res.headersSent) {
      console.log('❌ Headers already sent!');
      return;
    }
    res.redirect('/');

  } catch (error) {
    console.error('Error creating note from form:', error);
    res.status(500).send(`Error creating note: ${error.message}`);
  }
};

const deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id); // Use Note with capital N
    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error('Error deleting note:', error);
    res.status(500).json({ error: 'Error deleting note' });
  }
}

const deleteNoteFromForm = async (req, res) => {
    try {
        const noteId = req.params.id;
        
        console.log('🔍 Searching for note to delete...');
        const noteToDelete = await Note.findById(noteId);
        
        if (!noteToDelete) {
            console.log(' Note not found:', noteId);
            return res.status(404).send('Note not found');
        }
        
        //console.log(' Found note to delete:', noteToDelete.title);
        
        const deletedNote = await Note.findByIdAndDelete(noteId);
        console.log('Note deleted successfully:', deletedNote._id);
        
        res.redirect('/');
        
        
    } catch (error) {
        console.error(' Error deleting note:', error);
        console.error('Error stack:', error.stack);
        res.status(500).send(`Error deleting note: ${error.message}`);
    }
}
const renderAddPage = (req, res) => {
  res.render('add');
};

module.exports = {
  getAllNotes,
  createNote,
  createNoteFromForm,
  deleteNote,
  deleteNoteFromForm,
  renderAddPage
};