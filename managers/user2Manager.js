/* import User from '../models/users2'; */
const User = require('../models/users2.js');
const myClient = require('./connection.js');

class userManager extends User{

    static async getUserProfile(id) {
        myClient.connect();   
        let data;
        try {
            data = await myClient.query(`SELECT * FROM users where user_id = ${id};`)
        } 
        catch(err) {
            console.log('ERROR!!!!!');
        };
        myClient.end(); 
        return data.rows[0];        
    }
  }
module.exports = userManager;