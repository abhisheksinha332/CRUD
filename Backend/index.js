import express from 'express'

console.log("hello world");

const app = express();

const PORT = 3000;

app.get('/', function(req,res){
    res.send("Hello world")
})
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
        console.log("Server listening on Port", PORT);
})