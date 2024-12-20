import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./configs/mongodb.js";
import userModel from "./models/userModel.js";


// import connectDB from "./config/mongodb.js";
// import authRouter from "./routes/authRoutes.js";
// import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000
connectDB()

// const allowedOrigins = ['http://localhost:5173']


// Initialize middleware
app.use(express.json())
app.use(cors())


// {origin: allowedOrigins, credentials: true}

// API Endpoint
app.get('/', (req,res)=> res.send("API Working"));
app.use('/api/user', userModel)
// app.use('/api/user', userRouter)



app.listen(port, ()=> console.log(`Server started on PORT: ${port}`));