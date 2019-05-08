const express = require("express");
const bodyParser = require("body-parser");

const app=express();

app.set('view engine','hbs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',function(req,res){
    res.send("App setup");
});

app.listen(9000);


