const Message = require('../../managers/messageManager.js')

async function getMessagesWithUser(req, res){
    let result = await Message.getMessagesWithUser(req.params.userid);
    res.status(200).json(result);
}

module.exports = getMessagesWithUser;