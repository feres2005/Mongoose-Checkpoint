const mongoose=require ('mongoose');

 let userSchema= new mongoose.Schema({
    name:String,
    age:Number,
    favoriteFood:Array,
 

})
var User = mongoose.model('user', userSchema);
module.exports= User