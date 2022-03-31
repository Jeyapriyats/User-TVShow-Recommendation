import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import user from './routers/user.js';

const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());
app.use('/user',user);

// app.post('/updateShow',(req, res) => {
//     // res.send('Welcome to server')
//     console.log("Inside Index:",req.body)
//     });
const mongodb = 'mongodb://localhost:27017/register';
app.get('/', (req, res) => {
res.send('Welcome to server')
})
const PORT = 5000;




mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on ${PORT} `)))
.catch((error) => console.log(error));

