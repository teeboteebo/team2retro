const Sass = require('./sass');
const config = require('./config.json');
// Require the express module
const express = require('express');
// Create a new web server
const app = express();
// Tell the web server to serve files
// from the www folder
app.use(express.static('www'));
// Start the web server on port 3000
app.listen(3000,() => console.log('Let us get cracking team2! Go do your magic on port 3000'));

for(let conf of config.sass){
    new Sass(conf);
}