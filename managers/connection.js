/* const { MongoClient } = require('mongodb');
console.log('en connection');
async function myClient() {
    console.log('dentro de la función de connection');
    const url = 'mongodb+srv://santi:otraContra@cluster0.ez5kx.mongodb.net/test';
     const client = new MongoClient(url);
try {
console.log('en el try antes de la connexión');
 await client.connect();
console.log("Connected!")
} catch (e) {
    console.log('en el catch');
console.error(e)
} finally {
await client.close();
}
}
myClient().catch(console.error);
module.exports = myClient; */

const mongoose = require("mongoose");

/* const MONGO_URL = "mongodb://localhost/autenticacionLocalYT"; */
const MONGO_URL = "mongodb+srv://santi:otraContra@cluster0.ez5kx.mongodb.net/UrlShortener";

const myClient = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("DB FUNCIONANDO"))
    .catch((error) => console.error(error));
};

module.exports = myClient