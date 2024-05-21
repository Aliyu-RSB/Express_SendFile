const express = require('express');
const path = require('path');

const app = express();
// app.use(express.static(__dirname));
app.use(express.static("public"));
const port = process.env.PORT || 8090;

// sendFile will go here

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '/index.html'));
// });

// app.get('/style.css', function(req, res) {
//     res.sendFile(__dirname + "/" + "./css/style.css");
//   });

app.get('/profile', function(req, res){
    res.send("Welcome this is your profile Mr/Mrs");
 });



app.listen(port);
console.log('Server started at http://localhost:' + port);