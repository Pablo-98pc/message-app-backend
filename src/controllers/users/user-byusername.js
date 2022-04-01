const User = require('../../managers/user2Manager.js')

async function getUserByUsername(req, res){
    let result = await User.getUserByUsername(req.params.username);
    console.log(req.params.username);
    res.status(200).json(result);
}

module.exports = getUserByUsername;