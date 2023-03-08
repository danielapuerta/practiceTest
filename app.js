//loads the express module
const express = require('express');

//creates a our express server
const app = express();

//creates our port
const port = process.env.PORT || 3000;

//to join the path
const path = require('path');

//loads the body-parser module
const bodyParser = require('body-parser');

//looks at requests for URL-encoded
//middleware for parsing bodies from URL
//extended: true precises that the req.body object will contain values of any type instead of just strings.
//What is Middleware? It is those methods/functions/operations that are called BETWEEN processing the Request and sending the Response in your application method.
app.use(bodyParser.urlencoded({extended: true}));

//I need express.urlencoded() bc I am sending data to the server
//and I am asking the server to accept or store that data(obj)
//which is enclosed in the body (example: req.body) of that POST request
// is a method inbuilt in express to recognize the incoming Request Object as strings or arrays.
app.use(express.urlencoded());

//sets a basic route
app.get('/', (req,res) => res.send("Hello World"));

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/api/login', function(req, res){
    //create an object
    let userName = req.body.userName;
    let password = req.body.password;
    console.log("Your username is: " + userName);
    console.log("Your password is: " + password);
    res.send("data recieved: " + userName + password);
    
})

//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));