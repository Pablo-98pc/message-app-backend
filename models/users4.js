const {model , Schema}   = require("mongoose");

const User2 = new Schema({
    username: {type: String},
    member:  {type:Boolean}
})

module.exports = model("User", User2);