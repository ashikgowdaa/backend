    import express  from "express";
    import {connectDB} from "./db/index.js"
    import dotenv from "dotenv";
    import app from './app.js';

    dotenv.config({
        path:"./env"
    })

    connectDB()
    .then(()=>{
        app.listen((process.env.PORT || 8000),()=>{
            console.log(`SERVER IS LISTENING IN PORT ${process.env.PORT}`)
        })
    })
    .catch((err)=>{
        console.log("MONGODB CONNECTION ERROR in index.js ",err,)
    })