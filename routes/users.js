var router = require('express').Router();
router.get('/:userid', require('../controllers/users/user-profile')); 
router.get('/profile/:userid', require('../controllers/users/user-avatar'));  
router.get('/byusername/:username', require('../controllers/users/user-byusername')); 
router.get('/byusernamelogin/:username/:password', require('../controllers/users/user-byusername-login')); 
router.post('/newuser', require('../controllers/users/new-user')); 
/* router.patch('/addfriend/:userid/:friendid', require('../controllers/users/new-friend')); 
router.patch('/group/:groupid/:userid', require('../controllers/users/new-group')); 
router.patch('/deletefriend/:userid/:friendid', require('../controllers/users/delete-friend'));  */
module.exports = router;