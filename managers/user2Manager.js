const User = require('../models/users2.js');
const newClient = require('./connection.js');
const checkData = require('../helpers/checkData');
class userManager extends User{ 

    static async getUserProfile(id) { 
        const myClient = newClient();
        await myClient.connect();
        let data;
        try {
            data = await myClient.query(`SELECT * FROM users where user_id = ${id};`)
        } 
        catch(err) {
            console.log('ERROR!!!!!');
        }
        finally {
            myClient.end(); 
        } 
        return (data.rows[0]);  
    }
    static async getUserByUsername(username) { 
        const myClient = newClient();
        await myClient.connect();
        let data;
        try {
            data = await myClient.query(`SELECT * FROM users where username = ${username};`)
        } 
        catch(err) {
            console.log('ERROR!!!!!');
        }
        finally {
            myClient.end(); 
        } 
        return (data.rows[0]);  
    }
    static async postUser(body) {
        const myClient = newClient();
        await myClient.connect();   
        let data;
        console.log(body);
        try {
            data = "post undone";
            await myClient.query(`INSERT INTO users(id,username,last_name,first_name,email,password) 
            values(default,'${body.username}','${body.last_name}','${body.first_name}', 
            '${body.email}','${body.password}');`); 
            //lo de meter los grupos y los amigos es por probar, porque esto no se puede meter al crear un usuario
            data = "post succesfull";
        } 
        catch(err) {
            console.log('ERROR!!!!!');
        }
        finally {
            myClient.end(); 
        };
        return checkData(data);        
    }
    
  }
module.exports = userManager;