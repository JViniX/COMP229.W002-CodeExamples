const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



function helloWorld(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hello World!');
}

function goodbye(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send('Goodbye!');
}

function notfound(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send('Page Not Found');
}

app.get('/api/projects/:id', (req, res) => {
    console.log(req.params.id);
    res.send('Product ID: ' + req.params.id);
    // res.redirect('/hello')
})


const temp = {
    name: 'John Smith',
    email: 'john@smith.ca'
}

app.get('/user/getuser', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    
    res.json(temp);
})

app.get('/hello', helloWorld);
app.get('/bye', goodbye);
app.use(notfound);

app.listen(3000, ()=>{
    console.log('Server running at http://localhost:3000/');
})