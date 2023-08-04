// const bar = document.getElementById('bar');
// const nav = document.getElementById('navbar');

// if (bar) {
//     bar.addEventListener('click', () => {
//         nav.classList.add('active');
//     })
// }

const express = require('express');
const app = express();
const ejs = require('ejs');

// document.getElementById("sentence").setAttribute("class","active");

app.set('view engine','ejs');

app.use(express.static('CSS'));
app.use("/images",express.static('images'));

app.get("/",function(req,res){
    res.render("home");
});

app.get("/blog",function(req,res){
    res.render("blog");
})

app.get("/about",function(req,res){
    res.render("about");
})

app.get("/contact",function(req,res){
    res.render("contact");
})

app.listen(3000,function(){
    console.log("App is listening to port 3000")
});