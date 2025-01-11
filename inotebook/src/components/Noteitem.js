import React, { useContext } from 'react'
import noteContext from '../noteContext';

const Noteitem = (props) => {
    const context = useContext(noteContext)
    const { deleteNote } = context
    const { note, updateNote } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body" style={{backgroundColor: '#ffc10759',color:'black'}}>
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <span className="badge bg-dark">{note.tag}</span>
                    <p className="card-text"> <small className="text-body-secondary"> {new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', }).format(new Date(note.date))} </small></p>

                    <div className="d-flex justify-content-between">
                        <i className='far fa-edit mx-2' onClick={() => { updateNote(note) }} ></i>
                        <i className='far fa-trash-alt mx-2' onClick={() => { deleteNote(note._id); props.showAlert("Notes Deleted Successfully", "success") }} ></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
