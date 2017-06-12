//mongoDB 测试

var mongoose=require("mongoose");   //引入mongoose模块

mongoose.connect("mongodb://localhost/testDB");

var db=mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));
db.once("open",function(callback){
    console.log("mongoDB opened");
});
//module.exports=mongoose;

var articleSchema=mongoose.Schema({
    title:{type:String},
    author:{type:String},
    read:{type:Number}
});

var articleModel=mongoose.model('articles',articleSchema);
var personEntity =new articleModel({
    title:"First Article222",
    author:"liquid222",
    read:100
});

personEntity.save(function(err){
    if (err) return console.error(err);
    console.log("Save Successfull");
});