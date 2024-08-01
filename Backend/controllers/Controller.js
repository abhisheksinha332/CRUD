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
        if (!req.body.title || !req.body.email || !req.body.comment) {
            return res.status(400).json({ message: "Missing required fields" });
        }

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