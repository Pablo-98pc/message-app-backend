const Message = require("../models/messages.js");
const newClient = require("./connection.js");
const checkData = require("../helpers/checkData");
const { getValue } = require('../helpers/redis')

class messageManager extends Message {
  static async getMessagesWithGroup(groupid) {
    const myClient = newClient();
    await myClient.connect();
    let data;
    try {
      data = await myClient.query(
        `SELECT * FROM messages where from_group = ${groupid} or to_group = ${groupid};`,
      );
    } catch (err) {
      console.log("ERROR!!!!!");
    } finally {
      myClient.end();
    }
    return /* checkData */ data;
  }
  static async getMessagesWithUser(userid) {
    const myClient = newClient();
    await myClient.connect();
    let data;
    let dataname;

    try {
      data = await myClient.query(
        `SELECT DISTINCT to_user, from_user FROM messages where (from_user = ${userid} or to_user = ${userid});`,
      );
      // input: data of all messages with others user
      // return :filter for conversations with other user
      // get all messages with others user and unify in conversations
      const conversations = [];
      data.rows.map((item) => {
        if (
          item.to_user != userid &&
          !conversations.includes(item.to_user) &&
          item.to_user != null
        ) {
          return conversations.push(item.to_user);
        } else if (
          item.from_user != userid &&
          !conversations.includes(item.from_user) &&
          item.from_user != null
        ) {
          return conversations.push(item.from_user);
        }
      });
      // get de name of every user conversations
      dataname = await myClient.query(
        `SELECT username,id FROM users WHERE id IN (${conversations.toString()})`,
      );

      return dataname.rows; /* checkData */
    } catch (err) {
      console.log("ERROR!!!!!");
    } finally {
      myClient.end();
    }
  }
  static async getMessagesBetween(user1, user2) {
    const myClient = newClient();
    await myClient.connect();
    let data;

    try {
      data = await myClient.query(
        `SELECT to_user, from_user, date, text  FROM messages  where (from_user = ${user1} and to_user = ${user2}) or (from_user = ${user2} and to_user = ${user1}) ORDER BY date DESC ;`,
      );
    } catch (err) {
      console.log("ERROR!!!!!");
    } finally {
      myClient.end();
    }
    return /* checkData */ data;
  }

  static async getMessage(id) {
    const myClient = newClient();
    await myClient.connect();
    let data;
    try {
      data = await myClient.query(`SELECT * FROM messages where (id = ${id});`);
    } catch (err) {
      console.log("ERROR!!!!!");
    } finally {
      myClient.end();
    }
    return /* checkData */ data.rows[0];
  }

  static async getMessageByDate(date) {
    const myClient = newClient();
    await myClient.connect();
    let datetosearch = date.replace("T", " ");
    datetosearch = datetosearch.replace("Z", "");
    let data;
    try {
      data = await myClient.query(
        `SELECT * FROM messages where (date = '${datetosearch}');`,
      );
    } catch (err) {
      console.log("ERROR!!!!!");
    } finally {
      myClient.end();
    }
    return /* checkData */ data.rows[0];
  }

  static async postMessage(body, type) {
    const myClient = newClient();
    await myClient.connect();
    let data;
    if (type === "user") {
      try {
        console.log("dentro del try");
        data = "post undone";
        await myClient.query(`INSERT INTO messages (id,groupmessage,text, subject, from_user, to_user, date) 
                values(default,false,'${body.text}','${body.subject}', 
                ${body.from_user},${body.to_user},'${body.date}');`);
        //lo de meter los grupos y los amigos es por probar, porque esto no se puede meter al crear un usuario
        data = "post succesfull";
        //We verify if the user is logged in and registered in redis.
        let userEmit = await getValue(body.to_user);
        global.io.to(userEmit).emit("news");
      } catch (err) {
        console.log("ERROR!!!!!",err);
      } finally {
        myClient.end();
      }
    } else {
      try {
        await myClient.query(`INSERT INTO messages (id,groupmessage,text, subject, from_user, to_user, date) 
                values(default,true,'${body.text}','${body.subject}', 
                '${body.from_user}','${body.to_group}',${body.date});`);
      } catch (err) {
        console.log("ERROR!!!!!");
      } finally {
        myClient.end();
      }
    }

    return console.log("post succesfull");
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
// const conversations = data.rows?.map((consversation, index, array) => {
//   if (consversation.to_user == userid) {
//     array?.filter((arr) => {
//       if (arr.to_user == consversation.from_user) {
//         return;
//       } else {
//         // console.log(consversation.from_user);
//         return consversation.to_user;
//       }
//     });
//   } else {
//     return consversation.to_user;
//   }
// });
