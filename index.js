const express = require('express');
const app = express();
const path = require('path');


//ISSO É PARA O LOGIN
var session = require('express-session')
const passport = require('passport')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    })
)

app.use(passport.authenticate('session'));
//ISSO É PARA O LOGIN

app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

const routes = require('./routes/routes')

app.use(routes)

app.listen('3000', function(){
    console.log('Servidor funcionando');
});