const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const port = 3001;

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    console.log(req.body);
    res.send("hey 2!")
})

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})