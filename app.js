var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment");
});

app.get("/dog", function(req, res){
	res.send("The pig says 'oink'");
});


app.get("/speak/:animals", function(req, res){
	var wel = req.params.animals.toLowerCase();
	var animal = {
		pig: "Quik",
		cow: "Moo",
		dog: "Woof Woof!!"
	}
	var sound = animal[wel]
	res.send(" The " + wel + " says " + sound);
});


app.get("/repeat/:greet/:num", function(req, res){
	var gret = req.params.greet;
	var ls = Number(req.params.num);
	var message = "";

	for(var i = 0; i < ls; i++ ){
		message += gret + " ";
	}
	res.send(message);
});


app.get("*", function(req, res){
	res.send("sorry, page not found ...what are ypou doing with your life?")
});


app.listen(3000, function(){
	console.log("server started on port 3000!!");
})

//(process.env.PORT, process.env.IP)