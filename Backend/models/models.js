import mongoose from "mongoose";

const DetailSchema = mongoose.Schema({
    title : String,
    email : String,
    comment : String,
})

const Models = mongoose.model('FirstCollection',DetailSchema )

export default Models