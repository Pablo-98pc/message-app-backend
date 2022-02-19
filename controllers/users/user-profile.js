const Movies = require('../../models/movies.js')
function getMovieCredits(req, res){
    let movies = new Movies ();
    let result = movies.getMovieCredits(req.params.id)
    res.status(200).json(result);
    }
module.exports = getMovieCredits;