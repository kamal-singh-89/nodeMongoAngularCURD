const express = require('express');
const router = new express.Router();
const Post = require('./post.model');

router.post('/posts',(req,res)=>{
    const post = new Post(req.body);
    post.save().then(()=>{
        res.send(post);
    }).catch((error) =>{
        res.send(400).send(error);
    });
});

router.get('/posts/:id',(req,res)=>{
    const _id = req.params.id;
    Post.findById(_id).then((post)=>{
        if(!post){
            return res.status(401).send("Post not found!");
        }
        res.send(post);
    }).catch((error)=>{
        res.status(500).send("Error to find User!" + error);
    })
});
router.patch('/posts/:id',async (req,res)=>{
    const updates = Object.keys(req.body);
    const allowedUpdates = ['title','description'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status (401).send("Invalid updates");
    }

    try{
        const post = await Post.findById(req.params.id);
        updates.forEach((update) => post[update] = req.body[update]);
        await post.save();        
        if(!post){
            return res.status(401).send("Post not found");    
        }
        res.send(post);
    } catch(error){
        res.status(500).send("Error to find post !" + error);
    }
});

router.delete('/posts/:id',async (req,res)=>{
    try{
        const post = await Post.findByIdAndDelete(req.params.id);
        if(!post){
            return res.status(401).send("Post not delete.");    
        }
        res.send(post);
    } catch(error){
        res.status(500).send("Error to delete a post !" + error);
    }
});
module.exports = router;