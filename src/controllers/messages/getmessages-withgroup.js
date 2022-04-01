const Message = require('../../managers/messageManager.js')

async function getMessagesWithGroup(req, res){
    let result = await Message.getMessagesWithGroup(req.params.groupid);
        res.status(200).json(result);
}

module.exports = getMessagesWithGroup;