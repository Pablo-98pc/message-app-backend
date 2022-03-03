const Message = require('../models/messages.js');
const newClient = require('./connection.js');
const checkData = require('../helpers/checkData');

class messageManager extends Message{

    static async getMessagesWithGroup(groupid) {
        const myClient = newClient();
        await myClient.connect();        
        let data;
        console.log('antes del try')
        try {
            data = await myClient.query(`SELECT * FROM messages where from_group = ${groupid} or to_group = ${groupid};`)
        } 
        catch(err) {
            console.log('ERROR!!!!!');
        }
        finally {
            myClient.end(); 
        }
        return /* checkData */(data);
    }
    static async getMessagesWithUser(userid) {
        const myClient = newClient();
        await myClient.connect();        
        let data;
        console.log('antes del try')
        try {
            data = await myClient.query(`SELECT * FROM messages where from_user = ${userid} or to_user = ${userid};`)
        } 
        catch(err) {
            console.log('ERROR!!!!!');
        }
        finally {
            myClient.end(); 
        }
        return /* checkData */(data);
    }
    static async getMessagesBetween(user1,user2) {
        const myClient = newClient();
        await myClient.connect();        
        let data;
        console.log('antes del try de dos usuarios')
        try {
            data = await myClient.query(`SELECT * FROM messages where (from_user = ${user1} and to_user = ${user2}) or (from_user = ${user2} and to_user = ${user1});`)
        } 
        catch(err) {
            console.log('ERROR!!!!!');
        }
        finally {
            myClient.end(); 
        }
        return /* checkData */(data);
    }

/*     static async getUserProfile(id) {
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
    } */
    
  }
module.exports = messageManager;