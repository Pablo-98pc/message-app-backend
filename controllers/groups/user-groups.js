const Genres = require('../../models/genres.js')
function getList(req, res){
    let genres = new Genres ();
    let result = genres.getList()
    res.status(200).json(result);
    }
module.exports = getList;