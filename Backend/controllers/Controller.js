import mongoose from "mongoose";

import Models from "../models/models";

export const getModels = async(req,res) => {
    try {
        const data = await Models.find()
        console.log(data);

        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}