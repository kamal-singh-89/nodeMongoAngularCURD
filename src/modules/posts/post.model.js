const mongoose = require('mongoose');
const validator = require('validator');

const Post = mongoose.model('Post',
{
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String        
    }
});
module.exports = Post;