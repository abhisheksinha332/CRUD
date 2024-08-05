import express from 'express'
import mongoose from 'mongoose';
import 'dotenv/config'
import cors from 'cors'



import router from './routes/routes.js';

console.log("hello world");

const app = express();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT;



mongoose.connect(process.env.MONGO_URL,{})
.then( app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
        console.log("Server listening on Port", PORT);
}))



app.use('/data', router)

