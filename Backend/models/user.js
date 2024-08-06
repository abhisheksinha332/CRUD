import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required : true,
        unique : true,
        lowercase : true,
        index : true,
    },
    password : {
        type : String,
        required : true
    }
})

const User = mongoose.model('Userdetail',UserSchema )

export default User