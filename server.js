const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


// create express app
const app = express();
const user = require("./app/controllers/user");

//Load View 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// parse requests of content-type - application/x-www-form-urlencoded
// use matches any route verb and path whose prefix is same
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


// define a simple route || Home Route
app.get('/', (req, res) => {
    // res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
    res.render('index');
});



require('./app/routes/note.routes.js')(app);
// let notes = require('./app/routes/note.routes.js');
// let users = require('./app/controllers/users.js');
// app.use('/notes', notes);

app.use("/user", user);

// listen for requests  Start server
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});