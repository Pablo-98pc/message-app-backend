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
            data = await myClient.query(`SELECT * FROM users where username = '${username}';`)
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
        let bodyjson = JSON.stringify(body);
        let data;
        try {
            data = "post undone";
            /* await myClient.query(`INSERT INTO users(user_id,username,last_name,first_name,phone,email,usersex,age,password) 
            values(${body.user_id},'${body.username}','${body.last_name}','${body.first_name}',${body.phone},'${body.email}','${body.usersex}',${body.age},'${body.password}');`); */
            await myClient.query(`INSERT INTO users values(${body.user_id},'${body.username}','${body.last_name}','${body.first_name}', 
            ${body.phone},'${body.email}','${body.usersex}',${body.age},'${body.password}','{${body.groups[0]},${body.groups[1]},
            ${body.groups[2]}}','{${body.friends[0]},${body.friends[1]},${body.friends[2]}}');`); //lo de meter los grupos y los amigos es por probar, porque esto no se puede meter al crear un usuario
            /* await myClient.query(`INSERT INTO settings values(${body.user_id},${body.show_state},${body.allow_unknown_messages});`); */
            /* insert into users values(3,'elotroyo','no','lose',4569854,'adafaa@g.com','man',2,'asfafaf','{1,2}','{2,4}'); */
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