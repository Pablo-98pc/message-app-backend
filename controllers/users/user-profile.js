const User = require('../../managers/user2Manager.js')

async function getUserProfile2(req, res){
    let result = await User.getUserProfile(req.params.userid);
    console.log(req.params.userid);
    res.status(200).json(result);
}

module.exports = getUserProfile2;