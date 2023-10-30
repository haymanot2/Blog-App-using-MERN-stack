const mongoose = require("mongoose");

mongoose.set('strictQuery', false);


mongoose.connect("mongodb+srv://admin:admin12345@cluster0.x8nriwl.mongodb.net/blog?retryWrites=true&w=majority").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log(err);
})