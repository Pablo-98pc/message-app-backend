require('dotenv').config(); 
var md5 =require('md5');
var app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
/* app.use(require('./middlewares/checkBody')); */
app.use(process.env.ROOT, require('./routes'));
app.listen(3001, () => {
console.log('Working!!!')
});