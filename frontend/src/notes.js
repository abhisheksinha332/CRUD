import { useEffect, useState } from "react";
import axios from 'axios'



const Notes = () => {

    const [notes, setNotes] = useState([])
    const [createForm, setCreateForm] = useState({
        title : "",
        email : "",
        body: "",
    });
    const [updateForm, setUpdateForm] = useState({
        _id : null,
        title : "",
        email : "",
        body: "",
    })
    useEffect(()=> {
        fetchNotes();
    },[])

    const fetchNotes = async() => {
        const res = await axios.get('http://localhost:5000/data')
       
        const data = await res.data
        setNotes(data)
        console.log(data)
    }


    const updateCreateForm = (e) => {
        const {name, value} = e.target

        //console.log({name: value})

        setCreateForm({
            ...createForm,
            [name] : value,
        })
        // const word = e.target.value

        // console.log(word)
    }

    const createNote = async(e) => {
        e.preventDefault();

        const res = await axios.post('http://localhost:5000/data/notes', createForm)

        setNotes([...notes, res.data])
        //console.log(res)


        setCreateForm({title : "",
            email : "",
            body: "",})
        
    }

    const deleteNote = async(_id) =>{
        try {
            
            const res = await axios.delete(`http://localhost:5000/data/notes/delete/${_id}`);
           console.log(res)
            
           setNotes(notes.filter(note => note._id !== _id));

        } catch (error) {
            console.error('Error deleting note:', error);
            
        }
    }

    const handleUpdateForm = (e) => {
        const {value, name} = e.target


        setUpdateForm({
            ...updateForm,
            [name] : value,
        })
    }

    const toggleUpdate = (note) => {
        console.log(note)

        setUpdateForm({
            _id : note._id,
            title : note.title,
            email : note.email,
            body : note.body
        })
    }

    const UpdateNote = async(e) => {
        e.preventDefault();
        const {title, email, body} = updateForm

        const res = await axios.put(`http://localhost:5000/data/notes/update/${updateForm._id}`,{title, email, body})
        console.log(res)

        const newNotes = [...notes]
        const noteIndex = notes.findIndex((note => {
            return note._id === updateForm._id
        }))
        newNotes[noteIndex] = res.data

        setNotes(newNotes)

        setUpdateForm({
            _id : null,
            title : '',
            email : '',
            body : ''
        })
    }

    return(
        <div>
            
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
           
            
               {updateForm._id && (
                <div> <h2>Update Note :</h2>
                <form onSubmit={UpdateNote}>
                    <p>Title:</p>
                    <input value={updateForm.title} onChange={handleUpdateForm} name= "title" /><br></br>
                    <p>Email:</p>
                    <input value={updateForm.email} onChange={handleUpdateForm} name = "email"/><br></br>
                    <p>Body</p>
                    <textarea value={updateForm.body} onChange={handleUpdateForm} name = "body"/><br></br>
                    <button type="submit">Update Note</button>
                </form>
            </div>)}

            {!updateForm._id && (<div>
                <h2>Create Note:</h2>

                <form onSubmit={createNote}>
                    <p>Title:</p>
                    <input value={createForm.title} onChange={updateCreateForm} name= "title" /><br></br>
                    <p>Email:</p>
                    <input value={createForm.email} onChange={updateCreateForm} name = "email"/><br></br>
                    <p>Body</p>
                    <textarea value={createForm.body} onChange={updateCreateForm} name = "body"/><br></br>
                    <button type="submit">Create Note</button>
                </form>
            </div>)}
        </div>
    )
}


export default Notes;