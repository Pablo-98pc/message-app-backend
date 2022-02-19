const data = require('../dataMoviesComplete.json');
const credits = require('../dataCastCrew.json');
class Movies {
getMovieCredits(id) {
    let cast = credits.cast.map (field => [{ adult:field.adult,id: field.id,name: field.name}]);
    let crew = credits.crew.map (field => [{ adult:field.adult,id: field.id,name: field.name, department: field.department}]);
    let preciseData = {id: credits.id, cast, crew};
    return preciseData;
}
getSimilar(id) {
    let movieWanted = data.filter((movie)=> movie.genre_ids.includes(parseInt(id)));
    let preciseData = movieWanted.map((movie)=>[{poster_path:movie.poster_path},{
        original_title: movie.original_title}, {adult:movie.adult}, {release_date: movie.release_date}, {id: movie.id}]) ;
    return (preciseData); 
}
getMoviesByGenre(id) {
    let movieWanted = data.filter((movie)=> movie.genre_ids.includes(parseInt(id)));
    let preciseData = movieWanted.map((movie)=>[{poster_path:movie.poster_path},{
        original_title: movie.original_title}]) ;
    return (preciseData);
}
getSearch(string) {
    let movieList = [];
    data.map((movie)=> movie.title.includes(string)? 
    movieList.push({title: movie.title, id: movie.id, poster_path:movie.poster_path,vote_average:movie.vote_average}):null);
   /*  let movieList = data.filter((movie)=> movie.title.includes(string)); */
    let search = movieList.filter(((movie,index)=> index < 20));
    return search;
}
getUpcoming(){
    data.sort(function (a, b){
        return (b.release_date - a.release_date)
    })
    let nextMovies = data.filter(((member,index)=> index < 20));
    let nextMoviesData = [];
    nextMovies.map((member)=> nextMoviesData.push({poster_path: member.poster_path, release_date: member.release_date, title: member.title}))
    return (nextMoviesData);
}
getMovieDetails(id){
    let movieWanted = data.find(((member)=> member.id === parseInt(id)));
    if (movieWanted) {
            let preciseData = [{adult:movieWanted.adult},{title:movieWanted.title},{poster_path:movieWanted.poster_path},{
        overview: movieWanted.overview},{production_companies: movieWanted.production_companies},{video: movieWanted.video},{
        release_date: movieWanted.release_date},{production_countries: movieWanted.production_countries}] ;
    return (preciseData);
    }
    else {
        return [];
    }
    }
}
module.exports = Movies;




 /*    let newArray = data.results.map((member)=> Object.assign(member,country,companies)); */