var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hello world");
});

app.get("/name/:name", function(req, res){
    var name = req.params.name;
    res.send("<h1>Hello " + name +"</h1>");
 });
 
app.get("/google", function(req, res){
    res.redirect("https://www.google.com/");
});

app.get("/search/:value", function(req, res){
    var value =  req.params.value;
    res.redirect("https://www.google.com/search?q=" + value);
});
app.get("/*", function(req, res){
    res.send("<h1>error 404</h1>");
});
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
