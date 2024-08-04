import mongoose from "mongoose";

import Models from "../models/models.js";

export const getModels = async(req,res) => {
    try {
        const data = await Models.find()
        console.log(data);

        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const setModels = async(req,res) =>{
    try {
       

        let details = new Models({
            title: req.body.title,
            email: req.body.email,
            comment: req.body.comment
        });

        await details.save();
        res.status(201).json(details);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}



export const setNotes = async (req, res) => {
    try {
        let notes = new Models({
            title: req.body.title,
            email: req.body.email,
            body: req.body.body
        });

        await notes.save();
        res.status(201).json(notes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


export const getNote = async (req, res) => {
    const noteId = req.params.id;

    try {
        const NoteDetails = await Models.findById(noteId)
        console.log(NoteDetails)

        res.status(200).json(NoteDetails)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}



export const UpdateNote = async(req, res) => {
    

    try {
        const noteId = req.params.id
        const title = req.body.title
        const email = req.body.email
        const body = req.body.body
        const note  = await Models.findByIdAndUpdate(noteId,{
            title : title,
            email : email,
            body :body
        });
        console.log(note)

        const UpdatedNote = await Models.findById(noteId)
        res.status(200).json(UpdatedNote)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}


export const deleteNote = async(req, res) => {
    const NoteId = req.param.id
    try {
        
        
        // const NoteDetails =  Models.findById(NoteId);
        // if (!NoteDetails) {
        //     return res.status(404).json({ message: "Note not found" });
        // }

        await Models.deleteOne({id :NoteId})

        res.status(200).json({ message: "Note deleted successfully" });
        
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}