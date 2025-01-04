import mongoose, { Schema } from "mongoose";
// import { User } from "./user.model";

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    blogImage:{
        public_id:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
        }
    },
    category:{
        type:String,
        required:true,

    },
    about:{
        type:String,
        required:true,
        minlength:[200,"Should contain atleast 200 characters"]

    },
    adminname:{
        type:String,
        // required:true,

    },
    adminPhoto:{
        type:String
    },
    createdBy:{
        type:mongoose.Schema.ObjectId,
       ref:"User",

    }


});

export const Blog = mongoose.model("Blog",blogSchema);