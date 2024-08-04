import mongoose from "mongoose";

const DetailSchema = mongoose.Schema({
    title : String,
    email : String,
    body : String,
})

const Models = mongoose.model('Userdata',DetailSchema )

export default Models