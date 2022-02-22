/* const User = require('../../models/users.js') */
const User = require('../../managers/user2Manager.js')
/* const User = require('../../models/users2.js') */
async function getUserProfile2(req, res){
    let profile = new User ();
    let result = await profile.getUserProfile(req.params.userid);
    console.log(result+'from controler');
    res.status(200).json(result);
    }
module.exports = getUserProfile2;