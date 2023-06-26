import bodyParser from 'body-parser';
import express from "express";
import JobsRouter from "./Routers/JobRouter";
import connectDB from "./db";

const app=express();
const port=4000;
connectDB();

app.use(bodyParser.json());
app.use('/JobsRouter',JobsRouter);

app.listen(port,():void=>{
    console.log(`example app listen on http//localhost:${port}`);
});