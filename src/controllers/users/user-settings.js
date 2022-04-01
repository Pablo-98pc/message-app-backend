const Movies = require('../../models/users.js');
const checkData= require('../../helpers/checkData');
function getMovie(req, res){
    let movies = new Movies ();
    let result = movies.getMovieDetails(req.params.id);
    const [respuesta, resultChecked] = checkData(result);
    res.status(respuesta).json(resultChecked);
    }
module.export = getMovie;

