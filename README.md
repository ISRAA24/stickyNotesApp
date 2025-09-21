# Sticky Notes Application

A simple, elegant sticky notes application built with Node.js, Express, MongoDB, and EJS templates.

## Features

- 📝 Create new sticky notes with title and content
- 🎨 Choose from 8 different colors for your notes
- 👀 View all notes in a responsive grid layout
- 🗑️ Delete notes with confirmation
- 📱 Mobile-friendly responsive design
- 🎯 Clean, modern UI with smooth animations

## Prerequisites

Before running this application, make sure you have:

- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm (Node Package Manager)

## Installation

1. **Clone or create the project directory:**
   ```bash
   mkdir sticky-notes-app
   cd sticky-notes-app
   ```

2. **Create the project files:**
   - Copy all the provided code files into their respective locations:
     - `app.js` (main application file)
     - `package.json`
     - `views/layout.ejs`
     - `views/index.ejs` 
     - `views/add.ejs`

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Make sure MongoDB is running:**
   ```bash
   # On macOS/Linux
   mongod
   
   # On Windows
   net start MongoDB
   ```

## Usage

1. **Start the application:**
   ```bash
   npm start
   ```
   
   For development with auto-restart:
   ```bash
   npm run dev
   ```

2. **Open your browser and navigate to:**
   ```
   http://localhost:4001
   ```

3. **Using the application:**
   - Click "Add New Note" to create a new sticky note
   - Fill in the title and content
   - Choose a color for your note
   - Click "Save Note" to store it
   - View all notes on the main page
   - Delete notes using the trash icon (with confirmation)

## Project Structure

```
stickyNotes/
├── controllers/
│   └── note.controller.js     
├── middleware/
│   └── validationSchema.js
├── models/
│   └── node_modules/
├── routes/
│   └── notes.route.js       
├── views/
│   ├── add.ejs              
│   └── index.ejs             
├── index.js                  
├── package.json
└── package-lock.json
```

## Database Schema

The application uses MongoDB with the following note schema:

```javascript
{
  title: String (required),
  content: String (required),
  color: String (default: '#ffeb3b'),
  createdAt: Date (default: Date.now)
}
```

## API Endpoints

- `GET /` - Display all notes
- `GET /add` - Show add note form
- `POST /add` - Create a new note
- `POST /delete/:id` - Delete a specific note

## Customization

### Adding More Colors
To add more color options, modify the color picker in `views/add.ejs`:

```html
<div class="color-option" 
     style="background-color: #your-color;" 
     onclick="selectColor('#your-color', this)"
     title="Color Name"></div>
```

### Database Configuration
To use a different MongoDB connection string, modify the connection in `index.js`:

```javascript
mongoose.connect('your-mongodb-connection-string', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
```

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Templating:** EJS (Embedded JavaScript)
- **Frontend:** HTML5, CSS3, JavaScript
- **Icons:** Font Awesome
- **Styling:** Custom CSS with modern design patterns

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Troubleshooting

**MongoDB Connection Issues:**
- Ensure MongoDB is installed and running
- Check if the default port (27017) is available
- Verify the connection string in `app.js`

**Port Already in Use:**
- Change the PORT in `app.js` or set the PORT environment variable
- Kill any existing processes using port 3000

**Dependencies Issues:**
- Delete `node_modules` and run `npm install` again
- Ensure you have the correct Node.js version
