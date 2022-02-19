const Person = require('../../models/person.js')
function getCrew(req, res){
    let person = new Person ();
    let result = person.getCrew(req.params.id);
    res.status(200).json(result);
    }
module.exports = getCrew;