var router = require('express').Router();
router.get('/withgroup/:groupid', require('../controllers/messages/getmessages-withgroup')); 
router.get('/messageAvatar/:userid',require('../controllers/messages/getmessages-touser'));
router.get('/withuser/:userid', require('../controllers/messages/getmessages-withuser')); 
/* router.get('/:messageid', require('../controllers/messages/getmessage'));  */
/* router.get('/touser/:userid', require('../controllers/messages/getmessages-touser'));  */
/* router.get('/togroup/:groupid', require('../controllers/messages/getmessages-togroup'));  */
/* router.get('/fromuser/:userid', require('../controllers/messages/getmessages-fromuser'));  */
/* router.get('/fromgroup/:groupid', require('../controllers/messages/getmessages-fromgroup'));  */
/* router.post('/newmessage', require('../controllers/messages/newmessage'));  */
module.exports = router;

