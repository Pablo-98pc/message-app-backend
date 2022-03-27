const User = require("../models/users2.js");
const newClient = require("./connection.js");
const checkData = require("../helpers/checkData");
const md5 = require("md5");
class userManager extends User {
  static async getUserProfile(id) {
    const myClient = newClient();
    await myClient.connect();
    let data;
    try {
      data = await myClient.query(`SELECT * FROM users where id = ${id};`);
    } catch (err) {
      console.log("ERROR!!!!!");
    } finally {
      myClient.end();
    }
    return data.rows[0];
  }

  static async getUserByUsername(username) {
    const myClient = newClient();
    await myClient.connect();
    let data;
    try {
      data = await myClient.query(
        `SELECT * FROM users where username = ${username};`,
      );
    } catch (err) {
      console.log("ERROR!!!!!");
    } finally {
      myClient.end();
    }
    return data.rows[0];
  }

  static async getUserByUsernameLogin(username, password) {
    const myClient = newClient();
    await myClient.connect();
    let data;
    let codedpassword = md5(password);
    try {
      console.log("dentro del try del login");
      data = await myClient.query(
        `SELECT * FROM users where username = ${username};`,
      );
      console.log(data);
    } catch (err) {
      console.log("ERROR!!!!!");
    } finally {
      myClient.end();
    }
    return data.rows[0]?.password === codedpassword
      ? data.rows[0]
      : console.log("password does not match");
  }

  static async postUser(body) {
    const myClient = newClient();
    await myClient.connect();
    let data;
    let passwordtopost = md5(body.password);
    try {
      await myClient.query(`INSERT INTO users(id,username,last_name,first_name,email,password) 
            values(default,'${body.username}','${body.last_name}','${body.first_name}', 
            '${body.email}','${passwordtopost}');`);
      data = "post succesfull";
    } catch (err) {
      console.log("ERROR!!!!!");
    } finally {
      myClient.end();
    }
    return checkData(data);
  }
}
module.exports = userManager;
