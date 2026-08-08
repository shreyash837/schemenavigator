import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path'
import pool from './config/db.js'
import schemeRouter from './routes/schemeRouter.js';
// import ebc from './controllers/bTech.js'
import schemeObjectsRouter from './routes/schemeObject.js';

dotenv.config();

const port=process.env.PORT;

const app=express();

app.use(cors());
app.use(express.static(
    path.join(process.cwd(),'public')
));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/schemeForm',schemeRouter);
app.use('/getSchemeDetaul',schemeObjectsRouter)

app.get('/',(req,res)=>{
    res.sendFile(
        path.join(process.cwd(),'public','html','index.html')
    )
})


app.get('/getSchemeDetailJson/:schemeId',(req,res)=>{
    res.sendFile(
        path.join(process.cwd(),'public','html','schemeDetailPage.html')
    )
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
})

