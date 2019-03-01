require('dotenv').config();
const express = require('express'),
    sessions = require('express-session'),
    massive = require('massive'),
    ctrl = require('./controllers/controller');

const app = express(),
    { SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET } = process.env;

app.use(express.json())
app.use(sessions({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{
        maxAge: 8640000000
    }
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db',db);
    console.log('database connected')
    app.listen( SERVER_PORT, ()=> console.log(`Full Stack Review running on port ${SERVER_PORT}`))
})


app.post('/auth/register', ctrl.register);
app.post('/auth/login', ctrl.login)
app.post('/auth/logout',ctrl.logout)

app.get('/api/current', ctrl.getUser)