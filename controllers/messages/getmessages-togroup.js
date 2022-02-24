const Person = require('../../models/person.js')
function getDetails(req, res){
    let person = new Person ();
    let result = person.getDetails(req.params.id);
    res.status(200).json(result);
    }
module.exports = getDetails;