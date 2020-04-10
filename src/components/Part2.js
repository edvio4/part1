import React, { useState, useEffect } from 'react';
import Note from './Note';
import noteService from '../services/notes';


const Part2 = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('a new note...');
    const [showAll, setShowAll] = useState(true);

    const hook = () => {
        noteService
          .getAll()
          .then(notes => {
              setNotes(notes);
        });
    }

    useEffect(hook, []);

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important);

    const addNote = (event) => {
        event.preventDefault();
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
            id: notes.length + 1
        };

        noteService
            .create(noteObject)
            .then(newNote => {
                setNotes(notes.concat(newNote));
                setNewNote('');
            });
    }

    const toggleNoteImportance = id => () => {
        const note = notes.find(n => n.id === id);
        const changedNote = { ...note, important: !note.important };

        noteService
            .update(id, changedNote)
            .then(updatedNote => {
                setNotes(notes.map(note => note.id !== id ? note : updatedNote));
            });
    }

    const deleteNote = id => () => {
        noteService
            .deleteNote(id)
            .then(updatedNote => {
                setNotes(notes.filter(note => note.id !== id));
            });
    }

    const handleNoteChange = (event) => {
        setNewNote(event.target.value);
    }

    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {notesToShow.map(note =>
                    <Note key={note.id} note={note}
                        toggleImportance={toggleNoteImportance(note.id)}
                        deleteNote={deleteNote(note.id)}
                    />
                )}
            </ul>
            <form onSubmit={addNote}>
                <input
                    value={newNote}
                    onChange={handleNoteChange}
                />
                <button type="submit">save</button>
            </form>
        </div>
    );
}

export default Part2;
