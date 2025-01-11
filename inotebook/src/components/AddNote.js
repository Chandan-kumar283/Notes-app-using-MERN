import React, { useContext, useState} from 'react'
import NoteContext from '../noteContext';


const Addnote = (props) => {
    const context = useContext(NoteContext);
    const [note, setNote] = useState({title: "", description:"",tag:""})
    const { addNote } = context

    const handleClick = (e) => {
        e.preventDefault()
        addNote(note.title,note.description, note.tag)
       setNote({title: "", description:"",tag:""})
       props.showAlert("Notes Added Successfully", "success")
    }
    const onChange = (e) => {
            setNote({...note,[e.target.name]: e.target.value})
    }
    return (
        <div>
            <div className="container">
                <form className='my-2'>
                    <div className="mb-3" >
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" value={note.title} placeholder='Add a Title (Min 3 characters)' onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea type="text" className="form-control"  rows="3" id="description" name='description' value={note.description}  placeholder='Add a Description (Min 5 characters)' onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control"  id="tag" name='tag' value={note.tag}placeholder='Add a Tag' onChange={onChange} />
                    </div>
                    <div className="d-flex justify-content-between">
                    <button disabled={ note.title.length<3 || note.description.length<5 } type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleClick}>Save Note</button>
                    <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Addnote
