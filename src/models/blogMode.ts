import mongoose from "mongoose";
const schema = new mongoose.Schema({
    title:String,
    author:String,
    author_img:String,
    category:String,
    description:String,
    image:String,
    date:{
        type:Date,
        default:Date.now()
    }
})
export const BlogModel = mongoose.models.blogApp || mongoose.model("blogApp",schema);
//export default BlogModel;