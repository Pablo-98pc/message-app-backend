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

    static async getMessage(id) {
        const myClient = newClient();
        await myClient.connect();        
        console.log(id);
        let data;
        try {
            data = await myClient.query(`SELECT * FROM messages where (id = ${id});`)
        } 
        catch(err) {
            console.log('ERROR!!!!!');
        }
        finally {
            myClient.end(); 
        }
        return /* checkData */(data.rows[0]);
    }

    static async getMessageByDate(date) {
        const myClient = newClient();
        await myClient.connect();  
        let datetosearch = date.replace("T"," ");      
        datetosearch = datetosearch.replace("Z","");      
        let data;
        try {
            data = await myClient.query(`SELECT * FROM messages where (date = '${datetosearch}');`)
        } 
        catch(err) {
            console.log('ERROR!!!!!');
        }
        finally {
            myClient.end(); 
        }
        return /* checkData */(data.rows[0]);
    }

    static async postMessage(body, type) {
        const myClient = newClient();
        await myClient.connect();   
        let data;
        console.log(body);
        if (type === 'user') {
            try {
                console.log('dentro del try');
                data = "post undone";
                await myClient.query(`INSERT INTO messages (id,groupmessage,text, subject, from_user, to_user, date) 
                values(default,false,'${body.text}','${body.subject}', 
                ${body.from_user},${body.to_user},'${body.date}');`); 
                //lo de meter los grupos y los amigos es por probar, porque esto no se puede meter al crear un usuario
                data = "post succesfull";
                } 
            catch(err) {
                console.log('ERROR!!!!!');
            }
            finally {
                myClient.end(); 
            };                
        }
        else {
            console.log('dentro del else');
            try{
                await myClient.query(`INSERT INTO messages (id,groupmessage,text, subject, from_user, to_user, date) 
                values(default,true,'${body.text}','${body.subject}', 
                '${body.from_user}','${body.to_group}',${body.date});`); 
            }
                catch(err) {
                    console.log('ERROR!!!!!');
                }
                finally {
                    myClient.end(); 
                };  
        } 
    
        return (console.log('post succesfull'));        
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