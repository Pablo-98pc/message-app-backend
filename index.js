const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const port = 3001;

app.use(bodyParser.json());

let data = require('./data.json')


app.get('/', (req, res)=>{
    console.log(req.body);
    res.status(200).json(data)
    res.send("hey")
})

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})