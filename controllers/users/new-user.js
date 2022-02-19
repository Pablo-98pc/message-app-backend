const Movies = require('../../models/movies.js');
const checkData= require('../../helpers/checkData');
function getSearch(req, res){
    let movies = new Movies ();
    let result = movies.getSearch (req.params.string);
    const [respuesta, resultChecked] = checkData(result);
    res.status(respuesta).json(resultChecked);
    }
module.exports = getSearch;

