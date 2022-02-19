var router = require('express').Router();
router.get('/:userid', require('../controllers/users/user-profile')); 
router.get('/settings/:userid', require('../controllers/users/user-settings')); 
router.get('/byusername/:username', require('../controllers/users/user-byusername')); 
/* router.post('/newuser', require('../controllers/users/new-user'));  */
/* router.patch('/addfriend/:userid', require('../controllers/users/new-friend')); 
router.patch('/group/:groupid', require('../controllers/users/new-group')); 
router.patch('/deletefriend/:userid', require('../controllers/users/delete-friend'));  */
module.exports = router;