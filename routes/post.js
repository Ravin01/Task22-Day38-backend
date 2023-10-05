import  Express  from "express";
import { postModel } from "../db/models.js";

export const postRouter = Express.Router()


postRouter.get('/', async(req,res)=>{
    try{
        const data = await postModel.find({})
    if(data){
        res.send(data)
    }
    }catch(err){
        res.status(500).send(err)
    }
})

postRouter.post('/', async(req,res)=>{
    const data = req.body
    console.log(data)
    try{
        const post = new postModel(data)
        const newPost = await post.save()
        if(newPost){
            res.send('New post added successfully')
        }
    }catch(err){
        console.error(err)
        res.status(500).send('Error while creating post')
    }
})

postRouter.put('/:id', async(req,res)=>{
    const data = req.body
    const {id} = req.params
    try{
        const updatePost = await postModel.findOneAndUpdate({ postId : id}, data, { new : true})
        if(updatePost){
            res.send('Post updated successfully')
        }else{
            res.send('post not found')
        }
    }catch(err){
        res.status(500).send('error while updating post')
    }
})


postRouter.delete('/:id', async(req,res)=>{
    const {id} = req.params
    try{
        const deletePost = await postModel.deleteOne({postId : id})
        if(deletePost){
            res.send('post deleted successfully')
        }else{
            res.send('post not found')
        }
    }catch(err){
        res.status(500).send('error while deleting post')
    }
})