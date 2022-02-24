/* const data = require('../dataMoviesComplete.json'); */
const credits = require('../dataCastCrew.json');
const { Client } = require('pg');
const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'MessageService',
    password: '1234',
    port: 5432,
}
const myClient = new Client(connectionData);
class User {
    async getUserProfile(id) {
        myClient.connect();   
        let data;
        try {
            data = await myClient.query(`SELECT * FROM users where user_id = ${id};`)
            
        } 
        catch(err) {
            console.log('ERROR!!!!!');
        };
/*         .then(response => {
            console.log(response.rows);
            console.log(response.rows[0]);
        }) */
        
        /* .finally(() => {
            myClient.end();
        }); */
        myClient.end(); 
        return data;        
    }
    /* getUserProfile(id) {
        myClient.connect();
        async function getData() {
            const data = await myClient.query(`SELECT * FROM users`)
            .then(response => {
                console.log(response.rows);
                console.log(response.rows[0]);
                return response.rows[0];
            })
            .catch(err => {
                console.log('ERROR!!!!!');
            })
            myClient.end();   
          return data;     
        }
        return getData();
    } */ 
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
    postUser(string) {
        myClient.connect();
        let data = 'success';
        async function getData() {
            await myClient.query('INSERT INTO USERS VALUES({string})')
            .then(response => {
                console.log('post successfull');
                data
                return data;
            })
            .catch(err => {
                console.log('ERROR!!!!!');
            })
            myClient.end()            
        }
        return getData();
        console.log('data');
        console.log(data);
        console.log('data');
        return data;
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
module.exports = User;




 /*    let newArray = data.results.map((member)=> Object.assign(member,country,companies)); */