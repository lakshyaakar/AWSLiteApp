const express = require('express');
const app = express(); 

const cors = require('cors');
const bodyParser = require('body-parser');
const path = require("path")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors());
app.use( '/instance', require('./Routes/InstanceRoutes.js'))
app.use('/users',require('./Routes/userRoutes'))
app.use('/buckets', require('./Routes/S3Routes'))

app.get('/', (req, res) => { 
    res.send('Welcome to the AWS_Lite Web App')
}); 


app.listen(5000,() => {
    console.log("Server Started!!!")
}); 