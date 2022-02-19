const Person = require('../../models/person.js')
function getBirthdays(req, res){
    let person = new Person ();
    let result = person.getBirthdays();
    res.status(200).json(result);
    }
module.exports = getBirthdays;