
const asyncHandler = (asyncRequest)=>{
    return (req,res,next)=>{
    Promise.resolve(asyncRequest(req,res,next)).catch(err=>next(err));
}
}
export default asyncHandler;


// const asyncTry = (fn)=>{
//    async (req,res,next)=>{
// try {
//     await fn(req,res,next)
// } catch (error) {
// }
//     }
// }


