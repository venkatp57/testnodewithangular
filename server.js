const express = require('express'),
 path = require('path'),
 bodyParser = require('body-parser'),
 config = require('./config/config'), 
 authrouter = require('./controllers/authentication'),
 customerrouter = require('./controllers/customers'),
 productrouter = require('./controllers/product'),
 supplierrouter = require('./controllers/supplier'),
 orderrouter = require('./controllers/order')

const app = express();

const port = process.env.port || config.expressPort;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.send('Welcome to sample rest api using node........');
});

app.use('/api', authrouter);
app.use('/api', customerrouter);
app.use('/api', productrouter);
app.use('/api', supplierrouter);
app.use('/api', orderrouter);

var server = app.listen(port, ()=>{
    console.log(`Server runing on port number..... ${port}`);
});