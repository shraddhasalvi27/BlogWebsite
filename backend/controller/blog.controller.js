import Blog from "../models/blog.model..js"
export const createBlog = async(req,res)=>{
    try{
      const{title,category,about} = req.body;
      if(!title||!category||!about){
        return res
        .status(400)
        .json({message:"title,category and about are required fieds"})
      }
      const adminName = req?.user?.name;
      const adminPhoto = req?.user?.photo?.url;
      const createdBy = req?.user?._id;

      const blogData = {
        title,
        about,
        category,
        adminName,
        adminPhoto,
        createdBy,
        blogImage:{

        }
      }
      const blog = await Blog.create(blogData);
      res.status(201).json({
        message:"Blog created successfully",
        blog,
      });
    }catch(error){
        console.log(error);
        return res.status(500).json({error:"Internal server error"});

    }


}
export const deleteBlog =async(req,res)=>{
    const {id} = req.params;
    const blog = await Blog.findById(id);
    if(!blog){
        return res.status(404).json({message:"blog not found"})
    }
    await blog.deleteOne();
    res.status(200).json({message:"Blog delted successfuly"});

};
export const getAllBlogs = async (req,res)=>{
    const allBlogs = await blog.find();
    res.status(200).json(allBlogs);

}
export const getSingleBlogs = async (req,res)=>{
    const{id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({message:"Blog not found"});
    }   
    res.status(200).json(blog);
}
export const getMyBlogs = async(req,res)=>{
    const createdBy = req.user_id;
    const myBlogs = await blog.find({createdBy});
    res.status(200).json(myBlogs);

};

export const updateBlog = async(req,res)=>{
    const{id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.statis(400).json({message:"Invalid Blog id"});
    }
    const updatedBlog = await blog.findByIdAndUpdate(id,req.body,{new:true});
    if(!updatedBlog){
        return res.status(404).json({message:"Blog not found"});
    }
    res.status(200).json(updateBlog);
}

