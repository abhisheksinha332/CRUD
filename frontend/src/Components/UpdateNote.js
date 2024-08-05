const UpdateNote = ({ handleUpdateForm, UpdateNote, updateCreateForm, body, email }) => {
    return (
        <div>
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
        </div>
    );
};
export default UpdateNote;