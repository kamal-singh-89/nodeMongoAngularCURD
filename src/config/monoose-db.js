const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://127.0.0.1:27017/rohit-curd-api-db",{
        useNewUrlParser:true,
        useCreateIndex:true
    }
);
