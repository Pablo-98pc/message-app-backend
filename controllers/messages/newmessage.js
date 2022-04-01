const Message = require('../../managers/messageManager.js')

async function newMessage(req, res){
    console.log(req.body);
    let result = await Message.postMessage(req.body,req.params.type);
    res.status(200).json(result);
}

module.exports = newMessage;