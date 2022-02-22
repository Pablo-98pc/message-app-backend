/* const Movies = require('../../models/movies.js');
const checkData= require('../../helpers/checkData');
function getSearch(req, res){
    let movies = new Movies ();
    let result = movies.getSearch (req.params.string);
    const [respuesta, resultChecked] = checkData(result);
    res.status(respuesta).json(resultChecked);
    }
module.exports = getSearch; */
const User = require('../../models/users.js')
function postUser(req, res){
    const newuser = {
        user_id: 2,
        username: 'yomismo2',
        last_name: 'yo',
        first_name: 'mismo',
        phone: 658956235,
        email: 'mieamil2@gami.com',
        usersex: 'man',
        age: 25,
        password: 'micontrase¤a2',
        groups: [ 1, 2, 3 ],
        friends: [ 1, 2, 3 ]
      }
    let profile = new User ();
    let result = profile.postUser(newuser);
    res.status(200).json(result);
    }
module.exports = postUser;
