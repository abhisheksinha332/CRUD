import mongoose from "mongoose";

const DetailSchema = mongoose.Schema({
    title : String,
    email : String,
    comment : String,
    picture : String,
    createdAt :{
        type : Date,
        default : new Date()
    }
})

const Models = mongoose.model('Models',DetailSchema )

export default Models