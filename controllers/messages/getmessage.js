const Message = require('../../managers/messageManager.js')

async function getMessage(req, res){
    console.log(req.params.id);
    let result = await Message.getMessage(req.params.id);
        res.status(200).json(result);
}

module.exports = getMessage;