import React, { useContext, useEffect, useRef, useState } from 'react';
import NoteContext from '../noteContext';
import Noteitem from './Noteitem';
import Addnote from './AddNote';
import { useNavigate } from 'react-router-dom';


const Notes = (props) => {
  const { notes = [], getNotes, editNote } = useContext(NoteContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });
  const ref = useRef(null);
  const refClose = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
  };

  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    props.showAlert("Notes edited Successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Add Note Modal */}
      <div className="d-flex justify-content-center ">
  <button
    type="button"
    className="btn btn-success"
    data-bs-toggle="modal"
    data-bs-target="#addNoteModal"
  >
    Add Note📝
  </button>
</div>
<div className="modal fade"  id="addNoteModal" tabIndex="-1" aria-labelledby="addNoteModalLabel" aria-hidden="true">
        <div className="modal-dialog"  >
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-center">
              <h5 className="modal-title" id="addNoteModalLabel">Add Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Addnote showAlert={props.showAlert} />
            </div>
          </div>
        </div>
      </div>

      {/* Update Note Modal */}
      <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={ref} data-bs-target="#updateNoteModal"></button>

      <div className="modal fade" id="updateNoteModal" tabIndex="-1" aria-labelledby="updateNoteModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content"  >
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updateNoteModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div>
                <div className="container">
                  <h4 className='d-flex justify-content-center'>Update Your Note</h4>
                  <form className='my-2'>
                    <div className="mb-3">
                      <label htmlFor="etitle" className="form-label">Title</label>
                      <input type="text" className="form-control"   id="etitle" name='etitle' aria-describedby="emailHelp" value={note.etitle} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="edescription" className="form-label">Description</label>
                      <textarea type="text" className="form-control"   rows="3" id="edescription" name='edescription' value={note.edescription} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="etag" className="form-label">Tag</label>
                      <input type="text" className="form-control"   id="etag" name='etag' value={note.etag} onChange={onChange} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length < 3 || note.edescription.length < 5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Display */}
      <div className="row my-3">
        <h2>Notes of {props.user.name}</h2>
        <div className="container mx-4">
          {notes.length === 0 && "Add notes to View"}
        </div>
        {Array.isArray(notes) && notes.map((note) => (
          <Noteitem showAlert={props.showAlert} key={note._id} updateNote={updateNote} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
