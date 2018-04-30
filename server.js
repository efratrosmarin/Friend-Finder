// Dependencies
// ===========================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({type: 'text/html'}));
app.use(bodyParser.json({ type: 'application/*+json'}));
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}))

// Routes
// =============================================================

// Get routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
  });