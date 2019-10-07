const express = require('express');
require('./config/monoose-db');
const userRouter = require('./modules/users/user.routes');
const postRouter = require('./modules/posts/post.router');
const jwt = require('jsonwebtoken')

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())
app.use(userRouter)
app.use(postRouter)

app.listen(port,()=>{
    console.log('Server is up on port | '+port);
});
const myFunction = async ()=>{
    const token = await jwt.sign({_id:"1212"},"this is mycase", {expiresIn:"1 days"});
    //console.log(token)
    const data = jwt.verify(token,"this is mycase")
    //console.log(data)
}
myFunction()