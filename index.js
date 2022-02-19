require('dotenv').config(); 
var app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(require('./middlewares/checkBody'));
app.use(process.env.ROOT, require('./routes'));
app.listen(3000, () => {
console.log('Working!!!')
});