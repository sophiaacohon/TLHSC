import express from "express";

const app = express();
app.get('api/hi', (req,res)=>res.send("hello"));
app.listen(5173,()=>console.log("Started"));