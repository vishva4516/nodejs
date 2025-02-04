var mongoose=require('mongoose');
var userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})
module.exports=mongoose.model("user",userSchema);