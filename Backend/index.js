import express from 'express'
import mongoose from 'mongoose';

console.log("hello world");

const app = express();

const PORT = 3000;

app.get('/', function(req,res){
    res.send("Hello world, I am back to My web development !!")
})



mongoose.connect("mongodb+srv://3327abhishek:hW9JLXPMuiLMOJ5T@test1.wljekw7.mongodb.net/FirstDatabase/FirstCollection?retryWrites=true&w=majority&appName=Test1",{}).then( app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
        console.log("Server listening on Port", PORT);
}))


