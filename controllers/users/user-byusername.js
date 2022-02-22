const Movies = require('../../models/users.js');
const checkData= require('../../helpers/checkData');
function getMovie(req, res){
    let movies = new Movies ();
    console.log(req);
    console.log(req.params.id);
    console.log(parseInt(req.params.id)*100);
    let result = movies.getMoviesByGenre(req.params.id);
    const [respuesta, resultChecked] = checkData(result);
    res.status(respuesta).json(resultChecked);
    }
module.exports = getMovie;