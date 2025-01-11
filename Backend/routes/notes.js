const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');
// ROUTE 1: Get all the notes using GET "api/notes/fetchallnotes" Required  Login
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("Some error Occured")
    }
})
// ROUTE 2: Add the notes using POST "api/notes/addnotes" Required  Login
router.post('/addnotes', fetchuser, [
    body('title').isLength({ min: 2 }).withMessage('Title must be at least 2 characters long'),
    body('description').isLength({ min: 5 }).withMessage('Description must be at least 5 characters')
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // If there are errors return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save()
        res.json(savedNote)
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("Some error Occured")
    }
})
// ROUTE 3: Update the  existing notes using PUT "api/notes/updathenotes/" Required  Login
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // Update a Notes
        const updateNote = {}
        if (title) { updateNote.title = title }
        if (description) { updateNote.description = description }
        if (tag) { updateNote.tag = tag }
        // Find the Note that have to update it and updateit
        let note = await Note.findById(req.params.id)
        if (!note) { return res.status(404).send("Not Found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: updateNote }, { $new: true })
        res.json({ note })
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("Some error Occured")
    }
})
// ROUTE 4: Delete the existing notes using Delete "api/notes/deleteenotes/" Required  Login
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
 try {
        const { title, description, tag } = req.body;
        // Find the Note that have to delete it and delete it
        let note = await Note.findById(req.params.id)
        if (!note) { return res.status(404).send("Not Found") }
        // Allow deletion only if user owns this Note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }
        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "success": "Note has been Deleted", note: note })
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("Some error Occured")
    }
})
    module.exports = router