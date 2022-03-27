const Message = require("../../managers/messageManager.js");

async function getMessagesBetween(req, res) {
  let result = await Message.getMessagesBetween(
    req.params.user1,
    req.params.user2,
  );
  res.status(200).json(result);
}

module.exports = getMessagesBetween;
