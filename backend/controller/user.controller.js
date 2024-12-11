import User from "../models/user.model.js";
import bcrypt from  "bcryptjs";

export const register =async (req,res)=>{
   try{
    const {email,name,password,phone,education,role} = req.body;
    if(
        !email||
        !name||
        !password||
        !phone||
        !education||
        !role
    ){
        return res.status(400).json({message:"please fill required fields"})
    }
    const user = await User.findOne({email});
    if(user){
        return res
        .status(400).json({message:"User already exist with this email"});
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = new User({
        email,
        name,
        password:hashedPassword,
        phone,
        education,
        role,
        photo:{

        },
    });
    await newUser.save();
    if(newUser){
        let token = await createTokenAndSaveCookies(newUser._id,res);
        res.status(201).json({
            message:"User registeres successfully",
            user:{
                id:newUser._id,
                name:newUser.name,
                email:newUser.email,
                role:newUser.role,
                education:newUser.education,
                avatar:newUser.avatar,
                createdOn:newUser.createdOn,
            },
            token:token
        });
    }


   }catch(error){
    console.log(error);
    return res.status(500).json({error:"Internal Server error"});

   };
};

export const login =(req,res)=>{


}

export const logout =(req,res)=>{
    try{
        res.clearCookie("jwt");
        res.status(200).json({message:"User logedout successfully"})

    }
    catch(error){
        return res.status(500).json({error:"Internal server error"})
    }

}

export const getMyProfile = async(req,res)=>{
    const user = await req.user;
    res.status(200).json({user});

}
export const getAdminProfile = async(req,res)=>{
    const admins = await User.find({role:"admin"});
    res.status(200).json({admins});
}