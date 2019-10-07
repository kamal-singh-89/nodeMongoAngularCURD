require('../config/monoose-db');
// INCLUDE MODELS HERE

const User = require('../modules/users/user.model');
const Post = require('../modules/posts/post.model');


Post.findByIdAndDelete("5d96db47d926414480929b4c").then((post)=>{
    console.log(post)
    return Post.countDocuments({title:/my title fsdfdsf/});
}).then(()=>{
    console.log("Documented is counted.");
}).catch((error)=>{
    console.log("error" + error);
})