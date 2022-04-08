const {model , Schema}   = require("mongoose");

const Urls = new Schema({
    username: {type: String}, //o nombre, o nombre y apellidos??????
    email:{type: String},
    member:  {type:Boolean},
    premium: {type:Boolean},
    password: {type:String},
    clicksCounter: {type:Number},
    url: {type: String, unique: true, required:true},
    shorturl: {type: String, /* unique: true,  *//* required:true */},
    createdAt: {type: Date, default: Date.now},
})

module.exports = model("Urls", Urls);