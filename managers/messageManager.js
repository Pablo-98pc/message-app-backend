const Message = require('../models/messages.js');
const myClient = require('./connection.js');
const checkData = require('../helpers/checkData');

class messageManager extends Message{

    static async getMessagesWithGroup(groupid) {
        myClient.connect();   
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
        return checkData(data);
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