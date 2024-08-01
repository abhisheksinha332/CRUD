import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


import Models from './models/models.js';
import router from './routes/routes.js';

console.log("hello world");

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.get('/', function(req,res){
    res.send("Hello world, I am back to My web development !!")
})
 app.get('/hello', function(req,res){
    res.send("My World !!")
 })

 app.post('/add', (req,res) =>{
    Models.create(req.body)
 })

mongoose.connect("mongodb+srv://3327abhishek:hW9JLXPMuiLMOJ5T@test1.wljekw7.mongodb.net/sample_mflixs?retryWrites=true&w=majority&appName=Test1",{})
.then( app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
        console.log("Server listening on Port", PORT);
}))


app.use('/data', router)