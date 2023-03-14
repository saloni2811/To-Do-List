const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy Food" , "Cook Food" , "Eat food"];
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine" , "ejs");

app.get("/", function(req,res){
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US" , options);
    
   
    res.render("list" , {kindOfDay : day , newListItems : items});
});
app.post("/" , function(req,res){
    var item = req.body.newItem;

    items.push(item);
    
    res.redirect("/");

});







app.listen(5500,function(){
    console.log("App is running at server 5500");
});