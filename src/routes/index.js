const router = require('express').Router();
router.use('/users', require('./users'));
router.use('/groups', require('./groups'));
router.use('/messages', require('./messages'));
module.exports = router;
