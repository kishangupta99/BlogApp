import jwt from "jsonwebtoken";

const auth = (req, res, next)=> {
    const token = req.headers.authorization;
    console.log(token);
    

    try {
        jwt.verify(token, process.env.JWT_SECRET)
        console.log("middele ware run");
        
        next();
    } catch (error) {
        res.json({success: false, message: "Invalid Token"})
    }

}
export default auth;