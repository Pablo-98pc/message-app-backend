var router = require('express').Router();
router.get('/withgroup/:groupid', require('../controllers/messages/getmessages-withgroup')); 
router.get('/withuser/:userid', require('../controllers/messages/getmessages-withuser')); 
router.get('/withuser/:user1/:user2', require('../controllers/messages/getmessages-between')); 
router.get('/message/:id', require('../controllers/messages/getmessage')); 
router.get('/messagebydate/:date', require('../controllers/messages/getmessage-bydate')); 
router.post('/newmessage/:type', require('../controllers/messages/newmessage')); 
/* router.get('/touser/:userid', require('../controllers/messages/getmessages-touser'));  */
/* router.get('/togroup/:groupid', require('../controllers/messages/getmessages-togroup'));  */
/* router.get('/fromuser/:userid', require('../controllers/messages/getmessages-fromuser'));  */
/* router.get('/fromgroup/:groupid', require('../controllers/messages/getmessages-fromgroup'));  */
module.exports = router;
