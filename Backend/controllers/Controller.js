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


// app.post('/notes', async(req,res)=>{
//     const title = req.body.title;
//     const email = req.body.emeail;
//     const body = req.body.body;

// const model = await Models.create({
//         title : title,
//         email : email,
//         body : body
//     })

//     res.json({model : model})
// })