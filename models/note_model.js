const mongoose = require('mongoose');

// Note schema
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
    maxlength: [1000, 'Content cannot exceed 1000 characters']
  },
  color: {
    type: String,
    default: '#ffeb3b',
    validate: {
      validator: function(v) {
        return /^#[0-9A-F]{6}$/i.test(v);
      },
      message: 'Color must be a valid hex color code'
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Add some debugging
noteSchema.pre('save', function(next) {
  console.log('About to save note:', this.toObject());
  next();
});

noteSchema.post('save', function(doc) {
  console.log('Successfully saved note:', doc.toObject());
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;