const Message = require('../../managers/messageManager.js')

async function getMessageByDate(req, res){
    let result = await Message.getMessageByDate(req.params.date);
        res.status(200).json(result);
}

module.exports = getMessageByDate;