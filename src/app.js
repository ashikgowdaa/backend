import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// import { ApiResponse } from "./utils/ApiResponse.js";
import { ApiError } from "./utils/ApiError.js";


// USING CLASS BASED COMPONENT
console.log(new ApiError(400))

// const fist = new ApiResponse(400,[1,2],"APi Connected")
// console.log(fist)

const app = express();

// middleware
app.use(cors({
    origin:process.env.CORS_ORI,
    credentials:true
}))
// middleware to use json 

app.use(express.json({
    limit:"16kb"
}));
// middleware to use url data 

app.use(express.urlencoded({
    limit:'16kb',
    extended:true
}));
// middleware to handle static files like img pdf in server 
app.use(express.static("public"));

// middleware to use cookie
app.use(cookieParser());

export default app;