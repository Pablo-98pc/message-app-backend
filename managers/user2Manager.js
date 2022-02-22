/* import User from '../models/users2'; */
const User = require('../models/users2.js');
/* import User from '..models/users2.js'; */
/* import myClient from '../connection'; */
const myClient = require('./connection.js');
class userManager{
    async getUserProfile(id) {
        myClient.connect();   
        let data;
        try {
            data = await myClient.query(`SELECT * FROM users where user_id = ${id};`)
            console.log(data);
        } 
        catch(err) {
            console.log('ERROR!!!!!');
        };
        myClient.end(); 
        return data;        
    }

}