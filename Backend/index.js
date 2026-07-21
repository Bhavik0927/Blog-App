import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import connectDB from './db.js';
import dotenv from 'dotenv';
import authRouter from './Routes/Authentication.js'
import profileRoute from './Routes/Profile.js';
import blogRoute from './Routes/Blogs.js';
import { AuthMiddleware } from './utils/AuthMiddleware.js';
import helmet from 'helmet';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(helmet());



const frontendUrl = process.env.FRONTEND_API?.replace(/\/$/, "");

app.use(cors({
    origin: frontendUrl,
    credentials: true
}))




app.use(express.json());
app.use(cookieParser());

app.use('/', authRouter);
app.use('/', AuthMiddleware, profileRoute);
app.use('/', AuthMiddleware, blogRoute);


connectDB()
.then(() =>{
    app.listen(PORT,() =>{
        console.log(`Server is connected on ${PORT}`)
    })
}).catch(err =>{
    console.log(err.message);
});



