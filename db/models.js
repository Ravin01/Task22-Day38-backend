import mongoose from "mongoose";

export const postSchema = new mongoose.Schema({
    postId : {
        type : 'string',
        required : true
    },
    postName : {
        type : 'string',
        required : true
    },
    imageUrl : {
        type : 'string',
        required : true
    },
    comments : {
        type : 'string',
        required : true
    }
})


export const postModel = mongoose.model('posts', postSchema)