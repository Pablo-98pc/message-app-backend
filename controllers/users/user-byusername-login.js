const User = require('../../managers/user2Manager.js')

async function getUserByUsernameLogin(req, res){
    let result = await User.getUserByUsernameLogin(req.params.username,req.params.password);
    console.log(req.params.username);
    res.status(200).json(result);
}

module.exports = getUserByUsernameLogin;