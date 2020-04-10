import React from 'react';

const Note = ({note, toggleImportance, deleteNote}) => {
    const label = note.important ?
        'make not imporant' : 'make imporant';

    return (
        <li>
            <button onClick={deleteNote}>delete</button>{note.content}
            <button onClick={toggleImportance}>{label}</button>
        </li>
    );
}

export default Note;
