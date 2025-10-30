import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String, 
        require: true
    },
    sybTitle: {
        type: String, 
    },
    description: {
        type: String, 
        require: true
    },
    category: {
        type: String, 
        require: true
    },
    image: {
        type: String, 
        require: true
    },
    isPublished: {
        type: Boolean, 
        require: true
    }
}, {timestamps: true}); 

const Blog = mongoose.model('blog', blogSchema);

export default Blog;