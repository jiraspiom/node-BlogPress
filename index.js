'use strict';
const express = require("express")
const app = express()
const bodyParser = require("body-parser")

//carregar a view engina
app.set("view engine", "ejs")

//statico
app.use(express.static('public'))

//bodyparse para trabalhar com html e json
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", (req, res)=>{
    res.render("index")
})

app.listen(3001, function(){
    console.log("O servidor esta rodando...")
})