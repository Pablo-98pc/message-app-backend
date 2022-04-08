var router = require('express').Router();
console.log('en users router');
router.get('/:userid', require('../controllers/users/user-profile')); 
router.get('/all', require('../controllers/users/get-all')); 
router.post('/newuser', require('../controllers/users/new-user')); 
router.post('/newurl', require('../controllers/users/reduceUrl')); 
router.post('/newurl2', require('../controllers/users/reduceUrl2')); 

module.exports = router;