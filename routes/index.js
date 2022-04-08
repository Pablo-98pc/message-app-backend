const router = require('express').Router();
console.log('en index routes');
router.use('/users', require('./users'));
module.exports = router;
