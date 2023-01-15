const { response } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex')

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');


const { profile } = require('console');

const dbase = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'vhunter01',
        password: '',
        database: 'smart-brain'
    }
});

dbase.select('*').from('users').then(data => {
    console.login(data);
});

const app = express();

app.use(bodyParser.json);
app.use(cors());

app.get('/', (req, res) => {
    res.send(database.users)
})


app.post('/signin', (req, res) => { signin.handleSignin(req, res, dbase, bcrypt) })

app.post('/register', (req, res) => { register.handleRegister(req, res, dbase, bcrypt) })

app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, dbase) })

app.put('/image', (req, res) => { image.handleImage(req, res, dbase) })
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) })


app.listen(3000, () => {
    console.log("App is running on port 3000");
})


