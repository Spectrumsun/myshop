var express = require("express")
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
});

app.get("/content/:type", function(req, res){
	var type = req.params.type.toLowerCase();
	res.render("index", {messeage: type});
});

app.get("/know/:book", function(req, res){
	var boo = req.params.book;
	var post = [
		{title: "Lost in Space", author: "james camamron"},
		{title: "The great begining", author: "pat johnson"},
		{title: "The evolution of rem", author: "willam jack"},
		{title: "2001 A space Odesasy", author: " jame blunt"},
	]
	res.render("index2", {books: post})
})


app.listen(3000, function(){
	console.log("server started on port 3000!!");
})
