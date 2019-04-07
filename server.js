var express = require("express");
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get("/", function(request, response){

    response.render("index.ejs");

});

app.get("/about", function(request, response){

    response.render("about.ejs");

});

app.get("/news", function(request, response){

    response.render("news.ejs");

});

app.get("/public", function(request, response){

    response.render("news.ejs");

});

app.listen(8080);