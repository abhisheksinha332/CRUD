const NoteDetails = ({notes,deleteNote, toggleUpdate}) => {
    return(
        <div>
            <h2>Fetch Note:</h2>
                {notes.length > 0 ? (
                    notes.map(note => (
                        <div key={note._id}>
                            <h3>{note.title}</h3>
                            <p>{note.email}</p>
                            <p>{note.body}</p>
                            <button onClick={() => deleteNote(note._id)}>Delete</button>
                            <button onClick={() =>toggleUpdate(note)}>Update</button>
                        </div>
                    ))
                ) : (
                    <p>No notes available</p>
                )}
        </div>
    )
}

export default NoteDetails