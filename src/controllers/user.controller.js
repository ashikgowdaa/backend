import asyncHandler from "./../utils/aynchandler.js";

export const userRegister = asyncHandler(async(req,res)=>{
    res.json({
        message:"Post method Successful"
    })
})

