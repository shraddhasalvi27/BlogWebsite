import jwt from "jsonwebtoken";
import User from "../models/user.model.js"

const createTokenAndSaveCookies = async(userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET_KEY,{
        expiresIn:"30d",
    });
    res.cookies("jwt",token,{
        httpOnly:true,
        secure:false,
        sameSite:"lax",
        path :"/"
    });
    await User.findByIdAndUpdte(userId,{token});
    return token;
};

export default createTokenAndSaveCookies;