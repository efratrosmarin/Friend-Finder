// Import dependencies
var express = require("express");
var bodyparser = require("body-parser");
var path = require("path");
// initialize our server
var app = express();

// Define port
var PORT = process.env.PORT || 3000;

// Set up middleware (body-parser)
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());


// // parse various different custom JSON types as JSON
// app.use(bodyParser.json({ type: 'application/*+json' }))
 
// // parse some custom thing into a Buffer
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// // parse an HTML body into a string
// app.use(bodyParser.text({ type: 'text/html' }))

// Set up routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// Turn on server
app.listen(PORT, function() {
  console.log("Server running on port: " + PORT);
});
