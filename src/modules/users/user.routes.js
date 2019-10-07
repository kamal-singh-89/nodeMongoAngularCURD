const express = require('express');
const router = new express.Router();
const User = require('./user.model');

router.post('/users',async (req,res)=>{
    const user = new User(req.body);
    try{
        await user.save();
        res.status(201).send(user);
    } catch (error) {        
        res.status(400).send(error);
    }
});

router.post('/users/login',async (req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password);
        const token = await user.generateAuthToken(user);
        console.log(token)
        res.status(201).send(token);
    } catch (error) {        
        console.log('come in false')        
        res.status(401).send(error);
    }
});

router.get('/users/:id',(req,res)=>{
    const _id = req.params.id;
    User.findById(_id).then((user)=>{
        if(!user){
            return res.status(400).send("User not found!");
        }
        res.send(user);
    }).catch((error)=>{
        res.status(400).send("Error to find User!" + error);
    })    
});

module.exports = router;