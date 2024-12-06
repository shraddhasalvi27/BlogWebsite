import express from 'express'
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();
const PORT = process.env.PORT; 
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json()); 

try{
    mongoose.connect(MONGO_URL);
    console.log("database connected successfully");
}
catch(error){
    console.log(error);
}
app.get('/', (req, res) => {
  res.send('Welcome to your Express.js app!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});